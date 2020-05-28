const React = require('react')

class Index extends React.Component {
    render() {
        const toDoArray = []
        const anythingToDo = 
                <h3>There is nothing to do yet!</h3>
    
        {this.props.todo.map((todo, i) => {
            return (
                toDoArray.push(todo.item)
            )
        })}
        // const checkIfListEmpty = (
        //     toDoArray.length === 0 ? anythingToDo :
        //         toDoArray.map((todo, i) => {
        //             <li key={i}>
        //            {todo.item} - {todo.done}
        //            <form action="/todos/?_method=delete" method="POST">
        //                <input type="submit" value="Delete"/> 
        //            </form>
        //         </li>
        //         })
        // )
        console.log(toDoArray)
        return (
            <body>
                <h1>To Do List</h1> 
                 <ul>
                    {toDoArray.map((todo, i) => {
                        return (
                            <li key={i}>
                                {todo}
                                <form action="/todos/?_method=delete" method="POST">
                                    <input type="submit" value="Delete"/> 
                                </form>
                            </li>
                    )})}
                 </ul>
                 <form action="/todos" method="POST">
                     <input type="text" name="item"/>
                     <input type="submit" value="Add To Do"/> 
                 </form>
            </body>
        )
    }
}
module.exports = Index