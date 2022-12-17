import * as S from './styles'
import Lock from '../../../../assets/Lock/lock.png'

const Password = () => {
    return(
        <S.Container>
            <S.Lock src={Lock} alt="" />
            <S.Password type="password" placeholder='PASSWORD'/>
        </S.Container>
    );
}

export default Password;