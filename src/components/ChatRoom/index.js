import { memo } from 'react';
import { Button } from 'antd';
import styles from './ChatRoom.module.scss'
import { Link, useNavigate } from 'react-router-dom';
import { useDataContext } from '../hook';
import { auth, signOut } from '../../firebase/config';
import { actions } from '../../Reducer';

function ChatRoom() {
    const { state, dispatch } = useDataContext();
    const { user, login } = state;

    const handleLogout = () => {
        dispatch(actions.removeUser(user));
        dispatch(actions.setLogout(false));
        signOut(auth);
    }

    return (
        <div>
            <h1 className={styles.heading}>This is main Chatroom</h1>
            {login || 
                <Link to="/login" className={styles.button}>
                    <button>Login</button>
                </Link>}
            {login && 
                <div>
                    <h1 
                        className={styles.heading}
                    >Welcome, {user.displayName} !</h1>            
                    <img src={user.photoURL} className={styles.center} />
                    <Button 
                        style={{width: '100%'}}
                        onClick={handleLogout}
                    >Log out</Button>
                </div>}
        </div>
    ); 
}

export default memo(ChatRoom);