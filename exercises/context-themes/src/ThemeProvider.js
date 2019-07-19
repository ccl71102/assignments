import React from "react";

const ThemeContext = React.createContext();
const {Provider, Consumer} = ThemeContext;

class ThemeProvider extends React.Component {
    constructor(){
        super();
        this.state = {
            theme: "light"
        };
    }

    changeTheme = () => {
        this.setState(prevState => ({
            theme: prevState.theme === "light" ? "dark" : "light",
        }));
    }

    render() {
        return  <Provider 
                    value={{
                        theme: this.state.theme,
                        changeTheme: this.changeTheme}}>
                    {this.props.children}
                </Provider>
    }
}

export const withTheme = C => props => (
    <Consumer>
        {value => <C {...value} {...props}/>}
    </Consumer>
)

export default ThemeProvider;