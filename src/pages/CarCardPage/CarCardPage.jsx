import { useState } from "react";
import styles from "./CarCardPage.module.css";
import PickUpCar from "../../widgets/PickUpCar/PickUpCar";
import CarSwiper from "../../widgets/CarSwiper/CarSwiper";
import Modal from "../../widgets/Modal/Modal";
import CarGallery from "../../widgets/CarGallery/CarGallery";

function CarCardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const viewEquip = [
    "Противотуманные фары",
    "Датчик дождя",
    "Электрообогрев лобового стекла",
    "Электрообогрев боковых зеркал",
  ];
  const safetyEquip = [
    "Антипробуксовочная система (ASR)",
    "Система помощи при старте в гору (HSA)",
    "Крепление детского кресла (задний ряд) ISOFIX",
  ];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.carPhoto}>
          <button className={styles.buttonCatalog}>
            <img src="src/assets/icons/ArrowBack.png" alt="" />
            Каталог
          </button>
          <CarGallery />
        </div>
        <div>
          <div className={styles.descriptionContainer}>
            <div className={styles.title}>
              <div className={styles.titleText}>HAVAL H9 I, 2024</div>
              <div className={styles.newModel}>Новый</div>
            </div>
            <div className={styles.price}>3 670 000 &#8381;</div>

            <div className={styles.titleDescription}>Характеристики</div>
            <div className={styles.specifications}>
              <div className={styles.specification}>
                <div className={styles.descriptionText}>Цвет</div>
                <div className={styles.descriptionValue}>Чёрный</div>
              </div>
              <div className={styles.specification}>
                <div className={styles.descriptionText}>Поколение</div>
                <div className={styles.descriptionValue}>I (2022-2024)</div>
              </div>
              <div className={styles.specification}>
                <div className={styles.descriptionText}>Двигатель</div>
                <div className={styles.descriptionValue}>
                  2.0 л / 218 л.с. / Бензин
                </div>
              </div>
              <div className={styles.specification}>
                <div className={styles.descriptionText}>Кузов</div>
                <div className={styles.descriptionValue}>Внедорожник 5 дв.</div>
              </div>
              <div className={styles.specification}>
                <div className={styles.descriptionText}>VIN</div>
                <div className={styles.descriptionValue}>LGM*************</div>
              </div>
              <div className={styles.specification}>
                <div className={styles.descriptionText}>Комплектация</div>
                <div className={styles.descriptionValue}>Premium</div>
              </div>
              <div className={styles.specification}>
                <div className={styles.descriptionText}>Налог</div>
                <div className={styles.descriptionValue}>16350&#8381;/ГОД</div>
              </div>
              <div className={styles.specification}>
                <div className={styles.descriptionText}>Привод</div>
                <div className={styles.descriptionValue}>Полный</div>
              </div>
              <div className={styles.specification}>
                <div className={styles.descriptionText}>Коробка</div>
                <div className={styles.descriptionValue}>Автоматическая</div>
              </div>
              <div className={styles.specification}>
                <div className={styles.descriptionText}>Состояние</div>
                <div className={styles.descriptionValue}>Целый</div>
              </div>
            </div>
          </div>
          <div className={styles.complectationContainer}>
            <div className={styles.titleDescription}>Комплектация</div>
            <div className={styles.viewEquip}>
              <div className={styles.descriptionText}>Обзор</div>
              <div>
                {viewEquip.map((view) => (
                  <div className={styles.equipmentText} key={view}>
                    {view}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.safEquip}>
              <div className={styles.descriptionText}>Безопасность</div>
              <div>
                {safetyEquip.map((safety) => (
                  <div className={styles.equipmentText} key={safety}>
                    {safety}
                  </div>
                ))}
              </div>
            </div>
            <button
              className={styles.allParamsButton}
              onClick={handleOpenModal}
            >
              Все параметры
              <img src="src/assets/icons/ArrowRight.svg" alt="Стрелка вправо" />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.sameCarsContainer}>
        <CarSwiper />
      </div>

      <PickUpCar />

      <div className={styles.buttonsContainerContact}>
        <button className={styles.buttonContact}>Оставить заявку</button>
        <button className={styles.buttonContactTelegram}>
          Написать в Telegram
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Все параметры"
      ></Modal>
    </div>
  );
}

export default CarCardPage;
