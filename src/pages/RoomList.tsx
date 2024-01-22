import Container from 'react-bootstrap/Container';
import Button from '@components/Button';
import Carousel from '@components/Carousel';
import Footer from '@components/Footer';
import menuIcon from '@assets/menu.svg'
import roomSize from '@assets/room-size.svg'
import bed from '@assets/bed.svg'
import guest from '@assets/guest.svg'
import arrowRight from '@assets/arrow-right.svg'
import user from '@assets/profile.svg'
import styles from './RoomList.module.css';

const RoomList = () => {
  return (
    <div className={styles.rooms_bg}>
      <nav className={styles.navbar}>
        <img className={styles.logo} src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/logo.png?raw=true" alt="logo" />
        <div className={styles.menu_mobile}>
          <img src={menuIcon} alt="手機選單" />
        </div>
        <ul className={styles.navbar_links}>
          <li>客房旅宿</li>
          <li>
            <img src={user} alt='user-icon' style={{marginRight: '.5rem'}}/>Jessica
          </li>
          <Button 
            onClick={() =>{console.log(222)}}
          >
              立即訂房
          </Button>
        </ul>
      </nav>
      <div className={styles.banner}>
        <div className={styles.content_container}>
          <div className="text-center text-xl-start">
            <h4>享樂酒店</h4>
            <p>Enjoyment Luxury Hotel</p>
            <div className={styles.deco_line}></div>
          </div>
          <h3>客房旅宿</h3>
        </div>
      </div>
      <section className={styles.rooms_list}>
        <Container>
          <p className={styles.subtitle}>房型選擇</p>
          <h3 className={styles.title}>各種房型，任您挑選</h3>
          <div className={styles.roomCard}>
            <div className={styles.roomImg_container}>
              <Carousel />
            </div>
            <div className={styles.roomCard_body}>
              <h4 className={styles.roomName}>尊爵雙人房</h4>
              <p className={styles.roomDesc}>享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
              <div className={styles.feature_cards}>
                <div className={styles.feature_card}>
                    <div>
                      <img src={roomSize} alt="icon"/>
                    </div>
                    <p>24坪</p>
                </div>
                <div className={styles.feature_card}>
                    <div>
                      <img src={bed} alt="icon"/>
                    </div>
                    <p>1 張大床</p>
                </div>
                <div className={styles.feature_card}>
                    <div>
                      <img src={guest} alt="icon"/>
                    </div>
                    <p>2-4 人</p>
                </div>
              </div>
              <div className={styles.gap_line}></div>
              <div className={styles.card_bottom}>
                <p className={styles.price}>NT$ 10,000</p>
                <div>
                  <img src={arrowRight} alt="cta-icon"/>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.roomCard}>
            <div className={styles.roomImg_container}>
              <Carousel />
            </div>
            <div className={styles.roomCard_body}>
              <h4 className={styles.roomName}>尊爵雙人房</h4>
              <p className={styles.roomDesc}>享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
              <div className={styles.feature_cards}>
                <div className={styles.feature_card}>
                    <div>
                      <img src={roomSize} alt="icon"/>
                    </div>
                    <p>24坪</p>
                </div>
                <div className={styles.feature_card}>
                    <div>
                      <img src={bed} alt="icon"/>
                    </div>
                    <p>1 張大床</p>
                </div>
                <div className={styles.feature_card}>
                    <div>
                      <img src={guest} alt="icon"/>
                    </div>
                    <p>2-4 人</p>
                </div>
              </div>
              <div className={styles.gap_line}></div>
              <div className={styles.card_bottom}>
                <p className={styles.price}>NT$ 10,000</p>
                <div>
                  <img src={arrowRight} alt="cta-icon"/>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  )
}

export default RoomList