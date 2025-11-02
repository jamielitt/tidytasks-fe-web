import { currentSelection } from "../../enums/uiSurface";

export type uiSurfaceProps = {
  onCancelClick?: () => void,
  onDashboardClick?: () => void,
  onTaskContainerClick?: () => void,
  onAddTaskClick?: () => void,
};