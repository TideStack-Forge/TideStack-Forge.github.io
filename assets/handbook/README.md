# Handbook figures

Architecture diagrams and product screenshots are copied from the Ouroboros handbook worktree, under `docs/handbook/docs/`. Keep them aligned with the corresponding handbook explanations when updating product concepts.

The eight SVG diagrams were synchronized from handbook commit `b9e44f55e5`. Keep their embedded `ts-diagram` styles and gradients intact. The site's root `color-scheme` follows `data-theme`, which lets the SVGs' own `prefers-color-scheme` rules follow the selected site theme even when the operating system uses the opposite theme. No image filters or separate light/dark exports are needed.

- `system-collaboration.svg`, `metadata-assembly.svg`: `concepts/architecture/.assets/`, with the same filenames.
- `application-request.svg`, `deployment-isolation.svg`: `concepts/architecture/.assets/application-request-sequence.svg` and `deployment-and-isolation.svg`.
- `frontend-architecture.svg`, `backend-architecture.svg`: `concepts/architecture/.assets/frontend-technical-architecture.svg` and `backend-technical-architecture.svg`.
- `platform-architecture.svg`: `concepts/platform-architecture/.assets/platform-overall-architecture.svg`.
- `runtime-architecture.svg`: `concepts/runtime-base-architecture/.assets/runtime-base-overall-architecture.svg`.
- `foundation-architecture.svg`: extracted from the refined `foundation` iframe in `docs/marketing/architecture-style-study/index.html` in the same handbook worktree at `b9e44f55e5`. Its companion `foundation.html` contains the same figure. The SVG keeps the source's labels, capability boundaries, icon licenses, gradients and theme styles; the repeated brand/title strip is removed, and `viewBox="24 240 1552 1612"` crops the surrounding page margins. The remaining outer capability boundary describes product scope and is intentionally preserved.
- `business-model.png`: `low-code/development-platform-menus/.assets/business-model/fields-and-relations.png`.
- `page-designer.png`: `low-code/development-platform-menus/.assets/ui-schema/visual-editor.png`.
- `logicflow-editor.png`: `low-code/development-platform-menus/.assets/logicflow/editor-overview.png`.
- `approval-editor.jpg`: `low-code/development-platform-menus/.assets/approval-workflow/edit-approval-workflow.jpg`.
- `app-workspace.png`: `low-code/.assets/current-system/app-dashboard.png`.

Figures retain their original Chinese labels. English pages provide translated explanations and identify the full-size references as Chinese.
