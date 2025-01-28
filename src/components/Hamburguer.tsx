import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { GiHamburgerMenu } from 'react-icons/gi';

type Props = {
    children: ReactNode;
};

const MenuHamburger: React.FC<Props> = ({ children }) => {
    const [visible, setIsVisible] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsVisible(false);
            }
        };

        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    return (
        <div>
            <button
                ref={buttonRef}
                className="p-4 flex items-center justify-center cursor-pointer"
                onClick={() => setIsVisible(!visible)}
                aria-haspopup="true"
            >
                <GiHamburgerMenu
                    aria-label={visible ? 'Fechar dropdown' : 'Abrir dropdown'}
                    aria-expanded={visible}
                    className={`text-slate-500 mt-1 transition-all ${visible && 'rotate-180'}`}
                />
            </button>

            <AnimatePresence>
                {visible && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/25 z-40"
                            onClick={() => setIsVisible(false)} 
                        />

                        <motion.div
                            ref={menuRef}
                            role="menu"
                            className="fixed top-0 right-0 w-[65vw] h-screen overflow-hidden box-border bg-blue-600 text-slate-100 z-50"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', stiffness: 50 }}
                            aria-expanded={visible}
                        >
                            <div className="p-4 flex flex-col">{children}</div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MenuHamburger;