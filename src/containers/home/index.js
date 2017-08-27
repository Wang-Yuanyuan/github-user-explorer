import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {userNameOnChange} from './actions'
import Button from '../../components/button/index'
import TextInput from '../../components/textInput/index'
const Home = props => (
  <div>
    <h1>Github User Explore</h1>
    <form onSubmit={(evt) => {
      evt.preventDefault()
      props.goToSearchResults(props.name)
    }}>
      <TextInput onChange={(evt) => props.userNameOnChange(evt.target.value)}
        value={props.name}
        type='text' />
      <Button>Search</Button>
    </form>
  </div>
)

const mapStateToProps = state => ({
  name: state.user.name
})

const mapDispatchToProps = dispatch => bindActionCreators({
  userNameOnChange: (name) => userNameOnChange(name),
  goToSearchResults: (name) => push(`/${name}`)
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
