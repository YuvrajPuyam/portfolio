"""Abstract point-cloud visual for the Human-Object Interaction project tile.

A human figure reaching toward a floating object, rendered as a sparse
point cloud with the contact region highlighted. Deliberately generic:
no methodology, no data, just the concept.
"""
import numpy as np
import matplotlib.pyplot as plt

rng = np.random.default_rng(42)

BG = "#111111"


def sample_capsule(p0, p1, r, n):
    """Sample n points on the surface of a capsule from p0 to p1 with radius r."""
    p0, p1 = np.asarray(p0, float), np.asarray(p1, float)
    axis = p1 - p0
    length = np.linalg.norm(axis)
    axis_n = axis / (length + 1e-9)
    # random orthonormal frame
    tmp = np.array([1.0, 0.0, 0.0]) if abs(axis_n[0]) < 0.9 else np.array([0.0, 1.0, 0.0])
    u = np.cross(axis_n, tmp); u /= np.linalg.norm(u)
    v = np.cross(axis_n, u)
    t = rng.uniform(0, 1, n)
    theta = rng.uniform(0, 2 * np.pi, n)
    centers = p0[None, :] + t[:, None] * axis[None, :]
    pts = centers + r * (np.cos(theta)[:, None] * u[None, :] + np.sin(theta)[:, None] * v[None, :])
    return pts


def sample_sphere(c, r, n):
    c = np.asarray(c, float)
    d = rng.normal(size=(n, 3))
    d /= np.linalg.norm(d, axis=1, keepdims=True)
    return c[None, :] + r * d


# ---- figure skeleton (x = right, y = up, z = toward viewer) ----
pelvis = [0.00, 0.95, 0.00]
chest  = [0.00, 1.28, 0.00]
head_c = [0.02, 1.58, 0.02]
sh_l   = [-0.20, 1.42, 0.00]
sh_r   = [0.19, 1.42, 0.03]
# right arm reaches forward/right toward the object
elb_r  = [0.42, 1.36, 0.12]
wri_r  = [0.62, 1.32, 0.20]
# left arm relaxed
elb_l  = [-0.25, 1.14, 0.00]
wri_l  = [-0.27, 0.90, 0.04]
hip_l  = [-0.10, 0.92, 0.00]
hip_r  = [0.10, 0.92, 0.00]
kne_l  = [-0.12, 0.50, 0.04]
kne_r  = [0.14, 0.50, -0.03]
ank_l  = [-0.12, 0.07, 0.00]
ank_r  = [0.16, 0.07, -0.08]

obj_c = np.array([0.80, 1.28, 0.26])
obj_r = 0.115

parts = [
    (pelvis, chest, 0.130, 900),   # torso
    (chest, head_c, 0.050, 150),   # neck
    (sh_l, sh_r, 0.070, 250),      # shoulders
    (sh_r, elb_r, 0.048, 260),     # right upper arm
    (elb_r, wri_r, 0.040, 240),    # right forearm
    (sh_l, elb_l, 0.048, 240),     # left upper arm
    (elb_l, wri_l, 0.040, 220),    # left forearm
    (hip_l, kne_l, 0.062, 300),    # left thigh
    (hip_r, kne_r, 0.062, 300),    # right thigh
    (kne_l, ank_l, 0.050, 280),    # left shin
    (kne_r, ank_r, 0.050, 280),    # right shin
    (hip_l, hip_r, 0.090, 200),    # hips
]

body = np.vstack([sample_capsule(a, b, r, n) for a, b, r, n in parts]
                 + [sample_sphere(head_c, 0.105, 420),
                    sample_sphere(wri_r, 0.05, 120),   # right hand
                    sample_sphere(wri_l, 0.045, 90)])  # left hand
body += rng.normal(0, 0.004, body.shape)  # scan noise

obj = sample_sphere(obj_c, obj_r, 700)
obj += rng.normal(0, 0.003, obj.shape)

# contact region: a small patch of object points nearest the hand,
# plus hand points nearest the object
hand = sample_sphere(wri_r, 0.055, 260)
d_obj = np.linalg.norm(obj - np.asarray(wri_r), axis=1)
d_hand = np.linalg.norm(hand - obj_c, axis=1)
contact = np.vstack([obj[d_obj < 0.155], hand[d_hand < obj_r + 0.045]])

# sparse ground dots
gx = rng.uniform(-0.9, 1.3, 420)
gz = rng.uniform(-0.7, 0.8, 420)
ground = np.stack([gx, np.zeros_like(gx), gz], axis=1)

# ---- project: rotate about y, slight tilt, orthographic ----
def project(pts, yaw=np.deg2rad(-24), pitch=np.deg2rad(-8)):
    cy, sy = np.cos(yaw), np.sin(yaw)
    Ry = np.array([[cy, 0, sy], [0, 1, 0], [-sy, 0, cy]])
    cp, sp = np.cos(pitch), np.sin(pitch)
    Rx = np.array([[1, 0, 0], [0, cp, -sp], [0, sp, cp]])
    p = pts @ Ry.T @ Rx.T
    return p[:, 0], p[:, 1], p[:, 2]


fig, ax = plt.subplots(figsize=(16, 10), dpi=100)
fig.patch.set_facecolor(BG)
ax.set_facecolor(BG)

for pts, color, size, amin, amax in [
    (ground, "#ffffff", 1.0, 0.05, 0.12),
    (body, "#ffffff", 1.9, 0.22, 0.85),
    (obj, "#ffffff", 1.9, 0.22, 0.80),
]:
    x, y, z = project(pts)
    a = np.interp(z, (z.min(), z.max()), (amin, amax))
    ax.scatter(x, y, s=size, c=color, alpha=a, linewidths=0)

# contact highlight: soft amber, slightly larger
x, y, z = project(contact)
ax.scatter(x, y, s=3.2, c="#e8a04c", alpha=0.85, linewidths=0)

ax.set_aspect("equal")
ax.set_xlim(-0.85, 1.35)
ax.set_ylim(-0.10, 1.80)
ax.axis("off")
plt.subplots_adjust(left=0, right=1, top=1, bottom=0)
out = r"D:\portfolio-review\yuvraj-portfolio\public\media\projects\hoi.png"
plt.savefig(out, facecolor=BG, dpi=100)
print("saved", out)
