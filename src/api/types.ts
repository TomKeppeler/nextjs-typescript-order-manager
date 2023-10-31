export type TargetActions = {
  targetId: string;
  targetName: string;

  canAccess: boolean;
  canRead: boolean;
  canWrite: boolean;
  canAdd: boolean;
  canDelete: boolean;
};
