import * as S from './styles';
import Usuario from '../../../../assets/User/user.png'

const Username = () => {
    return(
        <S.Container>
            <S.User src={Usuario} alt="" />
            <S.Password type="text" placeholder='USERNAME'/>
        </S.Container>
    );
}

export default Username;