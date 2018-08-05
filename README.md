# react-transitions-demo
Exercise with React and CSSTransitions following the Udemy tutotial from CodeRevolution. To install the library:

```
npm install react-transition-group --save
```
This library consists in different modules depending of the complexity of the animationa we want. The most easy one is __Transition__

## Transition

```jxs
import Transition from 'react-transition-group/Transition'
```

#### Parameters

+ __in__ => is the state of the animation

+ __timeout__ => how long takes the animation

+ __state__ => _Entering, entered, exiting and exited_

+ __mountOnEnter__ => this mounts the component when entering is begone

+ __unmountOnExit__ => this unmounts the component when exiting is begone

With this model, we are playin literaly with CSS injected in React. This methode is not recomended.

```jsx
<Transition in={this.state.show} timeout={2000} mountOnEnter unmountOnExit>
    {state => (
    <div
        style={{
        background: 'red',
        height: '100px',
        transition: 'all 2s ease',
        opacity: state === 'exited' || state === 'exiting' ? 0 : 1,
        }}
    >
        <p>
        <strong>{state}</strong>
        </p>
    </div>
    )}
</Transition>
```
