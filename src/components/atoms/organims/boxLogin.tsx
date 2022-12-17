import * as S from './styles'
import Icone from '../../../assets/ImgPrincipal/Group.png'
import Username from '../molecules/username/username';
import Button from '../button/button';
import Password from '../molecules/password/password';

const BoxLogin = () => {
    return (
        <S.Container>
            <S.DivImg>
                <S.ImgIcon src={Icone} alt="" />
            </S.DivImg>
            <S.CaixaUser>
                <Username />
            </S.CaixaUser>
            <S.CaixaPassword>
                <Password />
            </S.CaixaPassword>
            <S.CaixaLogin>
                <Button />
            </S.CaixaLogin>
            <S.BoxForget>
                <a href="#">Forgot password?</a>
            </S.BoxForget>
        </S.Container>
    );
}

export default BoxLogin;