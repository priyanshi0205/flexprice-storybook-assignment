export type Status = 'active' | 'archived' | 'paid' | 'draft' | 'void';

export function getStatusLabel(status: Status) {
  const map: Record<Status, string> = {
    active: 'Active',
    archived: 'Archived',
    paid: 'Paid',
    draft: 'Draft',
    void: 'Void',
  };

  return map[status];
}