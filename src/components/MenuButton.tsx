import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';


type Props = {
    children: ReactNode;
    titulo: String;
};

const MenuButton: React.FC<Props> = ({children, titulo}) => {

    const [visible, setIsVisible] = useState(false);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);

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
            if (event.key == "Escape") {
                setIsVisible(false);

            }
        }
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);

        };
    }, []);

  return (
      <div 
         ref={menuRef}
      >
          <button className='p-4 flex items-center justify-center cursor-pointer' ref={buttonRef}
              onClick={() => setIsVisible(!visible)}
              aria-haspopup="true"
          > {titulo} 
              <MdOutlineKeyboardArrowDown
                  aria-label={visible ? "Fechar dropdown" : "Abrir dropdown"}
                  aria-expanded={visible} 
                  className={`text-slate-500 mt-1 transition-all ${visible && "rotate-180"}`}
              />

            </button>
          <AnimatePresence>
              {visible && (
                  <motion.div
                      role="menu"
                      className=" absolute top-[100%] overflow-hidden box-border  bg-blue-600 text-slate-100 "
                      initial={{ height: 0 }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      style={{ minWidth: buttonRef.current?.offsetWidth }}
                      aria-expanded={visible} 
                  >
                    <div
                    className='p-4 flex flex-col'
                    >
                          {children}

                    </div>
                  </motion.div>
              )}
          </AnimatePresence>
      </div>
  )
}

MenuButton.propTypes = {}

export default MenuButton