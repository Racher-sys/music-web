import React, { PureComponent } from 'react'
/**
 * 类组件
 * store：
 * props：
 */

// 定义props属性类型，age为可选属性
interface IProps{
    name: string
    age?: number
}

interface IState {
    message: string
    counter: number

}

interface ISnapshot {
    address: string
}

// class PureComponent<P = {}, S = {}, SS = any> extends Component<P, S, SS> { }接收范型

class Demo02 extends PureComponent<IProps, IState, ISnapshot> {
    name = 'aaaa'
    state = {
        message: "成功了",
        counter: 1000
    }

    // // 在组件更新之前可以给组件生成一个快照。把一些东西给保留下来。但是这个用的非常少
    // getSnapshotBeforeUpdate() {
    //     return { address: "中国" }
    // }

    // constructor(props: IProps){
    //     super(props)

    //     // 定义内部状态
    //     this.state = {
    //         message: "成功了",
    //         counter: 1000
    //     }
    // }

    render(): React.ReactNode {
        return <div>
            name: {this.props.name}
            <br/>
            age: {this.props.age}
            <br/>
            message: { this.state.message }
            <br/>
            couner: {this.state.counter}
        </div>
    }
}

export default Demo02