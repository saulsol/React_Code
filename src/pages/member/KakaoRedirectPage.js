import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getAccesstoken, getMemberWithAccessToken } from '../../api/kakaoApi';

function KakaoRedirectPage(props) {

    const [searchParams] = useSearchParams()

    const authCode = searchParams.get('code')

    useEffect(() => {
        getAccesstoken(authCode).then(data => {
            const accessToken = data
            getMemberWithAccessToken(accessToken).then(result => {
                console.log(result)
            })
        })
    }, [authCode]);

    return (
        <div>
            <div>Kakao Login Redirect</div>
            <div>{authCode}</div>
        </div>
    );
}

export default KakaoRedirectPage;