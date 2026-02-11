import React, { createContext, useContext, useState, useCallback } from 'react';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
	const [toasts, setToasts] = useState([]);

	const addToast = useCallback((message, type = 'info') => {
		const id = Date.now();
		setToasts((prev) => [...prev, { id, message, type }]);

		// Auto remove after 3 seconds
		setTimeout(() => {
			setToasts((prev) => prev.filter((toast) => toast.id !== id));
		}, 3000);
	}, []);

	const removeToast = (id) => {
		setToasts((prev) => prev.filter((toast) => toast.id !== id));
	};

	return (
		<ToastContext.Provider value={{ addToast }}>
			{children}
			<div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
				{toasts.map((toast) => (
					<div
						key={toast.id}
						className={`
                            px-4 py-3 rounded-sm shadow-lg flex items-center gap-3 min-w-[300px] animate-fade-in-up
                            ${toast.type === 'success' ? 'bg-green-500/10 border border-green-500/50 text-green-400' :
								toast.type === 'error' ? 'bg-red-500/10 border border-red-500/50 text-red-400' :
									'bg-surface-dark border border-border-dark text-white'}
                        `}
					>
						<span className="material-icons text-sm">
							{toast.type === 'success' ? 'check_circle' :
								toast.type === 'error' ? 'error' : 'info'}
						</span>
						<span className="text-sm font-medium">{toast.message}</span>
						<button
							onClick={() => removeToast(toast.id)}
							className="ml-auto text-gray-400 hover:text-white"
						>
							<span className="material-icons text-xs">close</span>
						</button>
					</div>
				))}
			</div>
		</ToastContext.Provider>
	);
};
