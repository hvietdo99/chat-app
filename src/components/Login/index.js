import React from "react";
import { Row, Col, Button, Typography } from 'antd';
import firebase, { db, auth, ggProvider, fbProvider, signInWithPopup } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';
import { useDataContext } from "../hook";
import { actions } from "../../Reducer";

const { Title } = Typography;

function Login() {
    const navigate = useNavigate();
    const { state, dispatch } = useDataContext();

    const handleFbLogin = () => {
        signInWithPopup(auth, fbProvider);
    }

    const handleGgLogin = () => {
        signInWithPopup(auth, ggProvider);
    }

    auth.onAuthStateChanged(user => {
        if (user) {
            dispatch(actions.setLogin(true));
            dispatch(actions.setUser(user));
            navigate('/');
        }
    })

    return (
        <div>
            <Row
                justify='center'
                style={{height: 800}}
            >
                <Col span={8}>
                    <Title 
                        style={{textAlign: 'center'}}
                        level={3}
                    >Fun Chat</Title>
                    <Button 
                        style={{width: '100%', marginBottom: 5}}
                        onClick={handleGgLogin}                       
                    >
                        Login with Google
                    </Button>
                    <Button 
                        style={{width: '100%'}}
                        onClick={handleFbLogin}
                    >
                        Login with Facebook
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export default Login;