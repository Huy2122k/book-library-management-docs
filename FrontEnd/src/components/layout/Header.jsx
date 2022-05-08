import { Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { useNavigate } from 'react-router-dom';

const HeaderCustom = () => {
    const navigate = useNavigate();
    const nav = [
        {
            label: 'Home',
            key: 'home'
        },
        {
            label: 'Admin',
            key: 'admin'
        },
        {
            label: 'User',
            key: 'user'
        }
    ];
    const navigateHeader = (item, key) => {
        console.log(item.key);
        navigate('/' + item.key);
    };
    return (
        <Header>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['home']}
                items={nav}
                onClick={navigateHeader}
            />
        </Header>
    );
};

export default HeaderCustom;
