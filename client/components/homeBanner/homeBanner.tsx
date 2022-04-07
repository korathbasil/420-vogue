import styles from "./homeBanner.module.scss";

export const HomeBanner = () => {
  return (
    <section className={styles.homeBanner}>
      <div className={styles.carousel}>
        <img
          src="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619__340.jpg"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vdHdlYXJ8ZW58MHx8MHx8&w=1000&q=80"
          alt=""
        />
        <img
          src="https://i.pinimg.com/originals/03/36/6b/03366b370d6e126563e58f72cb4b384f.jpg"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
    </section>
  );
};
