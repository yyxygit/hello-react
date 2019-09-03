import React from 'react';
import 'antd/es/menu/style/css';
import 'antd/es/icon/style/css';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class Sider extends React.Component {
    // submenu keys of first level
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: ['sub1'],
    };

    /**
     * 点击一级菜单，展开-收起（全部），收起 - 展开（其他同级一级菜单收起）
     * @param openKeys [String] 当前被点击展开或收起的SubMenu的 key值，放入数组内
     * menu 的 openKeys 绑定 status
     * this.setState 改变 openKeys 会折叠展开菜单
     * onOpenChange 方法，点击SubMenu时触发，通过设定 openKeys [String] 来更新菜单收展
     */
    onOpenChange = openKeys => {
        debugger;
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    render() {
        return (
            <Menu
                mode="inline"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
                style={{ width: 256 }}
            >
                <SubMenu
                    key="sub1"
                    title={
                        <span>
              <Icon type="mail" />
              <span>Navigation One</span>
            </span>
                    }
                >
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title={
                        <span>
              <Icon type="appstore" />
              <span>Navigation Two</span>
            </span>
                    }
                >
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu
                    key="sub4"
                    title={
                        <span>
              <Icon type="setting" />
              <span>Navigation Three</span>
            </span>
                    }
                >
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

export default Sider;