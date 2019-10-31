import React, {Component} from 'react';
import Counter from "./Counter";

const style = {
    margin: '20px',
};

class ControlPanel extends Component {
    render() {
        console.log('enter ControlPanel render');
        /**
         * <Counter caption={123} initValue={10} />
         * 控制台出现warning，但组件仍会渲染，自动将Number转为String了
         * Failed prop type:
         * Invalid prop `caption` of type `number` supplied to `Counter`, expected `string`.
         * <Counter  />
         *
         * Warning:
         * Failed prop type:
         * The prop `caption` is marked as required in `Counter`, but its value is `undefined`.
         * 组件仍会渲染
         */
        return (
            <div style={style}>
                <Counter caption="First" />
                <Counter  />
                <Counter caption="Second" initValue={10} />
                {/*<Counter caption={123} initValue={10} />*/}
                <Counter caption="Third" initValue={20} />
                <button onClick={ () => this.forceUpdate() }>
                    Click me to re-render!
                </button>
            </div>
        );
    }
}

export default ControlPanel;