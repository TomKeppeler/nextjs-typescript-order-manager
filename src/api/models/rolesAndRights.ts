import { TargetActions } from '../types';

export type TargetActionsDefinition = {
  id: string;
  name: string;

  actions: {
    canAccess: boolean;
    canRead: boolean;
    canWrite: boolean;
    canAdd: boolean;
    canDelete: boolean;
  };
};

export const mapTargetActionsDefinition = (tad: TargetActions): TargetActionsDefinition => ({
  id: tad.targetId,
  name: tad.targetName,
  actions: {
    canAccess: tad.canAccess,
    canAdd: tad.canAdd,
    canRead: tad.canRead,
    canWrite: tad.canWrite,
    canDelete: tad.canDelete,
  },
});
