import styles from './Login.module.css'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

interface LoginForm{
  email: string,
  password: string,
  rememberAccount: boolean,
}

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
      rememberAccount: false,
    }
  })

  const onLogin = (data: LoginForm) => {
    console.log(data);
    
  }
  return (
    <div className={styles.login_bg}>
      <nav className={styles.navbar}>
        <img className={styles.logo} src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/logo.png?raw=true" alt="logo" />
      </nav>
      <div className={styles.login_container}>
        <div className={styles.login_img_container}></div>
        <div className={styles.login_right_container}>
          <img className={styles.deco_line} src='https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/line3.png?raw=true' alt='deco-line'/>
          <div className={styles.login_form_container}>
            <form onSubmit={handleSubmit(onLogin)}>
              <p className={styles.form_subtitle}>
                享樂酒店，誠摯歡迎
              </p>
              <h1 className={styles.form_title}>
                立即開始旅程
              </h1>
              <div className={styles.field_container}>
                <div className={styles.field}>
                  <label htmlFor="email">電子信箱</label>
                  <input type="email" id='email' placeholder='請輸入信箱' {...register('email')} />
                </div>
              </div>
              <div className={styles.field_container}>
                <div className={styles.field}>
                  <label htmlFor="password">密碼</label>
                  <input type="password" id='password' placeholder='請輸入密碼' {...register('password')} />
                </div>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>    
                <label className={styles.checkbox_container} htmlFor='rememberAccount'>
                  記住帳號
                  <input id='rememberAccount' type="checkbox" value='記住帳號' {...register('rememberAccount')}  />
                  <span className={styles.checkmark}></span>
                </label>
                <Link 
                  to='/' 
                  className={styles.anchor_text}
                >
                  忘記密碼?
                </Link>
              </div>
              <div className={styles.btn_container}>
                <button className={styles.btn}>會員登入</button>
              </div>
              <p>
                沒有會員嗎？
                <Link 
                  to='/' 
                  className={styles.anchor_text}
                >
                  前往註冊
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login