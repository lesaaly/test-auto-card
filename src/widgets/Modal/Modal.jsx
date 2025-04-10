import { useRef, useEffect } from "react";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, title }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <button className={styles.buttonClose}>
        <img src="src/assets/icons/ArrowBack.png" alt="Назад" />
        <div className={styles.buttonCloseText}>Назад</div>
      </button>
      <div className={styles.modalContent} ref={modalRef}>
        <div className={styles.modalHeader}>
          <div className={styles.modalTitle}>{title}</div>
          <button className={styles.closeButton} onClick={onClose}>
            <img src="src/assets/icons/Close.svg" alt="Закрыть" />
          </button>
        </div>
        <div className={styles.modalBody}>
          <div className={`${styles.paramsContainer} ${styles.paramsView}`}>
            <div className={`${styles.paramsTitle} ${styles.paramsViewTitle}`}>
              Обзор
            </div>
            <div className={`${styles.paramsText} ${styles.paramsMobileText}`}>
              <div>Противотуманные фары</div>
              <div>Датчик дождя</div>
            </div>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.paramsContainer}>
            <div className={styles.paramsTitle}>Мультмедиа</div>
            <div className={styles.paramsText}>
              <div>USB</div>
            </div>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.paramsContainer}>
            <div className={styles.paramsTitle}>Салон</div>
            <div className={styles.paramsText}>
              <div>Ткань</div>
            </div>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.paramsContainer}>
            <div className={styles.paramsTitle}>Комфорт</div>
            <div className={`${styles.paramsText} ${styles.paramsMobileText}`}>
              <div>Климат-контроль 1-зонный</div>
              <div>Дистанционный запуск двигателя</div>
              <div>Система доступа без ключа</div>
            </div>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.paramsContainer}>
            <div className={styles.paramsTitle}>Защита от угона</div>
            <div className={styles.paramsText}>
              <div>Центральный замок</div>
            </div>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.paramsContainer}>
            <div className={styles.paramsTitle}>Элементы экстерьера</div>
            <div className={`${styles.paramsText} ${styles.paramsMobileText}`}>
              <div>Диски 19</div>
              <div>Рейлинги на крыше</div>
            </div>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.paramsContainer}>
            <div className={styles.paramsTitle}>Прочее</div>
            <div className={`${styles.paramsText} ${styles.paramsMobileText}`}>
              <div>Полноразмерное запасное колесо</div>
              <div>Климат-контроль 2-зонный</div>
              <div>Кондиционер</div>
              <div>Круиз-контроль</div>
              <div>Парктроник передний</div>
            </div>
          </div>
        </div>
        <div className={styles.modalFooter}>
          <button className={styles.hideButton} onClick={onClose}>
            Скрыть параметры
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
