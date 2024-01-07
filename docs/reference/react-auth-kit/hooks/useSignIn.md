---
title:  useSignIn - React Auth Kit
description: Hook to signin or login your user into your application
---

# useSignIn

<div data-ea-publisher="authkitarkadipme" data-ea-type="text" id="ref_useSignIn"></div>

## Function Signature

**useSignIn**<`T`\>(): ([`signInConfig`](#signinconfig-parameters): `signInFunctionParams`<`T`\>) => `boolean`

Sign In React Hook

Call the hook to sign In and authenticate the user

This will authenticate the user by writing the uer state into the mamory
Also, this will call the rx engine to store the auth into into the storage

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | Type of User State Object |

## Returns
React Hook with SignIn Functionility

`fn` => ([`signInConfig`](#signinconfig-parameters)): `boolean`

## Parameters

| Name | Type | Descripntion |
| :------ | :------ | :-------- |
| [`signInConfig`](#signinconfig-parameters) | `signInFunctionParams`<`T`\> | Params for signin |

### signInConfig Parameters

| Name | Type | Descripntion | Required |
| :------ | :------ | :-------- | :------ |
| `auth.token` | `string` | JWT Auth Token | `true` |
| `auth.type`  | `string` | Type of the Token | `false` |
| `refresh`    | `string` | JWT Refresh Token | `true`  |
| `userState`  | `T`      | User Data         | `false` |

```js
{
  auth : {
    token: 'ey.........o1',
    type: 'Bearer'
  },
  refresh: 'ey..........92',
  userState: {
    name: 'The Dev'
    uuid: 'fff-fff-ffff'
  }
}
```

## Example

Here's a an example without refresh token:
```jsx
import useSignIn from 'react-auth-kit/hooks/useSignIn'

const LoginComponent = () => {
 const signIn = useSignIn()
 signIn({
   auth: {
     token: '<jwt token>'
   },
   userState: {name: 'React User', uid: 123456}
 })
}
```

Here's an example with refresh token in TypeScript:
```jsx
import useSignIn from 'react-auth-kit/hooks/useSignIn'

 interface IUserData {
 name: string;
 uuid: string;
};

const LoginComponent = () => {
 const signIn = useSignIn<IUserData>()
 signIn({
   auth: {
     token: '<jwt token>'
   },
   userState: {name: 'React User', uid: 123456},
   refresh: <refresh jwt token>
 })
}
```

## Remarks

If you are using refresh token, make sure you add that in the parameter,
else it throws AuthError

If you are not using refresh token, make sure you don't include
that in the parameter, else it throws AuthError.

## Throws

[AuthError](./../errors.md#autherror)

- Thrown if the Hook is used outside the Provider Scope.
- Thrown if refresh token is added, in spite not used.
- Thrown if refresh token is not added, is spite used.

#### Defined in

[hooks/useSignIn.ts](https://github.com/react-auth-kit/react-auth-kit/blob/37dc30d4/packages/react-auth-kit/src/hooks/useSignIn.ts#L85)

---

<p align="center">&mdash; 🔑  &mdash;</p>
<p align="center"><i>React Auth Kit is <a href="https://github.com/react-auth-kit/react-auth-kit/blob/master/LICENSE">MIT License</a> code</i></p>