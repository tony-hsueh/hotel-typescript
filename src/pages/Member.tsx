import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import styles from './Member.module.css'
import '@components/Tab.css'

const Member = () => {
  const [isEditPassword, setIsEditPassword] = useState(false)
  const [isEditUserInfo, setIsEditUserInfo] = useState(false)

  return (
    <div className={styles.user_edit}>
      <Navbar />
      <div className={styles.banner}>
        <Container className={styles.banner_container}>
          <div style={{
              display: 'flex', 
              flexDirection: 'column', 
              height: '100%',
              justifyContent: 'center',
            }}
          >
            <div className={styles.content}>
                <div className={styles.avatar}>
                  <img src='https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/user1.png?raw=true' />
                </div>
                <h3 className={styles.greet}>Hello，Jessica</h3>
            </div>
          </div>
        </Container>
      </div>
      <section className={styles.member_tab}>
        <Container>
          <Tabs
            defaultActiveKey="info"
            id="profile"
            className="profile-tab"
            style={{ border: 'none'}}   
          >
          <Tab eventKey="info" title="個人資料" style={{padding: '40px 0'}}>
            <div className={styles.edit_password_container}>
              <h5>修改密碼</h5>
              <div className='mb-3'> 
                <label htmlFor='email'>電子信箱</label>
                <input id='email' value='Jessica@exsample.com' readOnly className={`${styles.input} ${styles.input_readonly}`} />
              </div>
              {isEditPassword ?
                <>
                  <div className='mb-3'>
                    <label htmlFor='oldPassword'>舊密碼</label>
                    <input type='password' id='oldPassword'/>
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='oldPassword'>舊密碼</label>
                    <input type='password' id='oldPassword'/>
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='oldPassword'>舊密碼</label>
                    <input type='password' id='oldPassword'/>
                  </div>
                  <div className='d-flex'>
                    <button className=''>放棄修改</button>
                    <button>儲存設定</button>
                  </div>
                </>
              :
              <div className='d-flex justify-content-between'>
              <div style={{ width: '85%'}}>
                <label htmlFor='password'>密碼</label>
                <input type='password' id='password' value='Jessicawgrgeh' readOnly className={`${styles.input} ${styles.input_readonly}`} />
              </div> 
              <button className={styles.reset_password_btn} onClick={() => {setIsEditPassword(!isEditPassword)}}>重設</button>
            </div>
              }
            </div>
            <div className={styles.edit_password_container}>
              <h5>基本資料</h5>
              <div className='mb-3'> 
                <label htmlFor='name'>姓名</label>
                <input 
                  id='name' 
                  value='Jessica Wang'
                  placeholder='請輸入姓名' 
                  readOnly={!isEditUserInfo} 
                  className={`${styles.input} ${!isEditUserInfo && styles.input_readonly}`} 
                />
              </div>
              <button className={styles.reset_password_btn} onClick={() => {setIsEditUserInfo(!isEditUserInfo)}}>編輯</button>
            </div>
          </Tab>
          <Tab eventKey="order" title="我的訂單">
            <div className={styles.order_card}>
              <p>預訂參考編號： HH2302183151222</p>
              <p>即將來的行程</p>
              <div className={styles.room_img}>
                <img src='https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E8%A1%8C%E5%8B%95%E7%89%88/room2-1.png?raw=true' />
              </div>
              <div className={styles.order_info}>
                <div>尊絕雙人房，1 晚</div>
                <div>住宿人數：2 位</div>
              </div>
              <div className={styles.check_in_time}>
                <p className='mb-'>入住：6 月 10 日星期二，15:00 可入住</p>
              </div>
              <div className={styles.check_out_time}>
                <p className='mb-'>退房：6 月 11 日星期三，12:00 前退房</p>
              </div>
              <div className={styles.room_price}>NT$ 10,000</div>
              <hr className={styles.divide_line}/>
              <div className='mb-4'>
                {/* <DecoLineTitle title="房內設備" /> */}
              </div>
              <div className={styles.room_offer_card}>
                
              </div>
            </div>
          </Tab>
        </Tabs>
          
        </Container>
        <div className={styles.deco_line}>
          <img src={window.innerWidth > 768 ? "https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/line2.png?raw=true" : "https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E8%A1%8C%E5%8B%95%E7%89%88/line.png?raw=true"} alt="deco-line"/>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Member