import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle, Clock, XCircle, FileText } from 'lucide-react';

export type InvoiceStatus =
	| 'PAID'
	| 'PENDING'
	| 'FAILED'
	| 'DRAFT'
	| 'VOID'
	| string;

interface Props {
	status: InvoiceStatus;
	className?: string;
}

const statusConfig: Record<
	string,
	{ label: string; className: string; Icon: any }
> = {
	PAID: {
		label: 'Paid',
		className: 'bg-green-50 text-green-700 border-green-200',
		Icon: CheckCircle,
	},
	PENDING: {
		label: 'Pending',
		className: 'bg-yellow-50 text-yellow-700 border-yellow-200',
		Icon: Clock,
	},
	FAILED: {
		label: 'Failed',
		className: 'bg-red-50 text-red-700 border-red-200',
		Icon: XCircle,
	},
	DRAFT: {
		label: 'Draft',
		className: 'bg-gray-50 text-gray-700 border-gray-200',
		Icon: FileText,
	},
	VOID: {
		label: 'Void',
		className: 'bg-gray-100 text-gray-500 border-gray-300',
		Icon: XCircle,
	},
};

const InvoiceStatusBadge: React.FC<Props> = ({ status, className }) => {
	const config = statusConfig[status] || {
		label: status,
		className: 'bg-gray-50 text-gray-700 border-gray-200',
		Icon: FileText,
	};

	const Icon = config.Icon;

	return (
		<span
			className={cn(
				'inline-flex items-center gap-1 px-2 py-1 text-xs font-medium border rounded-full',
				config.className,
				className,
			)}
		>
			<Icon className="w-3.5 h-3.5" />
			{config.label}
		</span>
	);
};

export default InvoiceStatusBadge;