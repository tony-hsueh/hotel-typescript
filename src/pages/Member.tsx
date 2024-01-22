import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import styles from './Member.module.css'

const Member = () => {
  const [isEditPassword, setIsEditPassword] = useState(false)
  // const [isEditUserInfo, setIsEditUserInfo] = useState(false)

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
          {/* <Tabs
            defaultActiveKey="profile"
            id="justify-tab-example"
            className="mb-3"
            justify
          >
            <Tab eventKey="home" title="個人資料">
              個人資料
            </Tab>
            <Tab eventKey="profile" title="我的訂單">
              我的訂單
            </Tab>
          </Tabs> */}
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