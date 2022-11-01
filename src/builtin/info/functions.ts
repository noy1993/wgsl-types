import { MarkdownString } from 'vscode';
import { IFunction } from "./interfaces";

// https://www.w3.org/TR/WGSL/#builtin-functions
export const functions: IFunction[] = [
    // https://www.w3.org/TR/WGSL/#logical-builtin-functions
    {
        name: 'all',
        overload: '(e: vecN<bool>) -> bool',
        description: 'Returns true if each component of e is true.'
    },
    {
        name: 'all',
        overload: '(e: bool) -> bool',
        description: 'Returns \'e\'.'
    },
    {
        name: 'any',
        overload: '(e: vecN<bool>) -> bool',
        description: 'Returns true if any component of \'e\' is true.'
    },
    {
        name: 'any',
        overload: '(e: bool) -> bool',
        description: 'Returns \'e\'.'
    },
    {
        name: 'select',
        overload: '(f: T,t: T,cond: bool) -> T',
        parameter: '\'T\' is [scalar](https://www.w3.org/TR/WGSL/#scalar) or [vector](https://www.w3.org/TR/WGSL/#vector)',
        description: 'Returns \'T\' when `cond` is true, and `f` otherwise.'
    },
    {
        name: 'select',
        overload: '(f: vecN<T>,t: vecN<T>,cond: vecN<bool>) -> vecN<T>',
        parameter: '\'T\' is [scalar](https://www.w3.org/TR/WGSL/#scalar)',
        description: '[Component-wise](https://www.w3.org/TR/WGSL/#component-wise) selection. Result component `i` is evaluated as `select(f[i], t[i], cond[i])`.'
    },
    // https://www.w3.org/TR/WGSL/#arrayLength-builtin
    {
        name: 'arrayLength',
        overload: '(p: ptr<storage, array<E>, AM>) -> u32',
        parameter: '\'e\' is an element type for a [runtime-sized](https://www.w3.org/TR/WGSL/#runtime-sized) array,  [access mode](https://www.w3.org/TR/WGSL/#access-mode) `AM` is [read](https://www.w3.org/TR/WGSL/#access-read) or [read\_write](https://www.w3.org/TR/WGSL/#access-read_write)',
        description: 'Returns the number of elements in the [runtime-sized](https://www.w3.org/TR/WGSL/#runtime-sized) array.'
    },
    // https://www.w3.org/TR/WGSL/#numeric-builtin-functions
    {
        name: 'abs',
        overload: '(e: T ) -> T',
        parameter: 'S is AbstractInt, AbstractFloat, i32, u32, f32, or f16\n T is S, or vecN<S>',
        description: `
        The absolute value of \`e\`. [Component-wise](https://www.w3.org/TR/WGSL/#component-wise) when \`T\` is a vector.\n
        
        If \`e\` is a floating-point type, then the result is \'e\' with a positive sign bit. If \'e\' is an unsigned [integer scalar](https://www.w3.org/TR/WGSL/#integer-scalar) type, then the result is \'e\'. If \'e\' is a signed [integer scalar](https://www.w3.org/TR/WGSL/#integer-scalar) type and evaluates to the largest negative value, then the result is \'e\'.
        `
    },
    {
        name: 'acos',
        overload: '(e: T) -> T',
        parameter: 'S is AbstractFloat, f32, or f16\n T is S or vecN<S>',
        description: `
Returns the principal value, in radians, of the inverse cosine (cos<sup>-1</sup>) of \'e\'.\n
That is, approximates \'x\' with 0 ≤ \'x\' ≤ π, such that \`cos\`(\'x\') = \'e\'.\n

[Component-wise](https://www.w3.org/TR/WGSL/#component-wise) when \'T\' is a vector.
        `
    },
    {
        name: 'acosh',
        overload: '(e: T) -> T',
        parameter: 'S is AbstractFloat, f32, or f16\n\n T is S or vecN<S>',
        description: `
Returns the inverse hyperbolic cosine (cosh<sup>-1</sup>) of \`e\`, as a hyperbolic [angle](https://www.w3.org/TR/WGSL/#angles) in radians. \n 
That is, approximates \`x\` with 0 ≤ x ≤ ∞, such that \`cosh\`(\`x\`) = \`e\`.\n

The result is 0 when \`e\` < 1.\n

[Component-wise](https://www.w3.org/TR/WGSL/#component-wise) when \`T\` is a vector.\n

_\`Note:\`The result is not mathematically meaningful when e < 1._
`
    },
    {
        name: 'asinh',
        overload: '(e: T) -> T',
        parameter: 'T:(vecN<S>,S);S:(f32,f16)'
    },
    {
        name: 'atan',
        overload: '(e: T) -> T',
        parameter: 'T:(vecN<S>,S);S:(f32,f16)'
    },
    {
        name: 'atanh',
        overload: '(e: T) -> T',
        parameter: 'T:(vecN<S>,S);S:(f32,f16)'
    },
    {
        name: 'atan2',
        overload: '(e: T) -> T',
        parameter: 'T:(vecN<S>,S);S:(f32,f16)'
    },
    {
        name: 'ceil',
        overload: '(e: T) -> T',
        parameter: 'T:(vecN<S>,S);S:(f32,f16)'
    },
    {
        name: 'clamp',
        overload: '(e: T,low: T,high: T) -> T',
        parameter: 'T:(vecN<S>,S);S:(i32,u32,f32,f16)'
    },
    {
        name: 'cos',
        overload: '(e: T) -> T',
        parameter: 'T:(vecN<S>,S);S:(f32,f16)'
    },
    {
        name: 'cosh',
        overload: '(e: T) -> T',
        parameter: 'T:(vecN<S>,S);S:(f32,f16)'
    },
    {
        name: 'countLeadingZeros',
        overload: '(e: T) -> T',
        parameter: 'T:(vecN<S>,S);S:(i32,u32)'
    },
    {
        name: 'countOneBits',
        overload: '(e: T) -> T',
        parameter: 'T:(vecN<S>,S);S:(i32,u32)'
    },
    {
        name: 'countTrailingZeros',
        overload: '(e: T) -> T',
        parameter: 'T:(vecN<S>,S);S:(i32,u32)'
    },
    {
        name: 'cross',
        overload: '(e1: vec3<T>,e2: vec3<T>) -> vec3<T>',
        parameter: 'T:(f32,f16)'
    },
    {
        name: 'degrees',
        overload: '(e1: T) -> T',
        parameter: 'T:(vecN<S>,S);S:(f32,f16)'
    },
    {
        name: 'determinant',
        overload: '(e1: matCxC<T>) -> T',
        parameter: 'T:(f32,f16)'
    },
    {
        name: 'distance',
        overload: '(e1: T,e2 T) -> S',
        parameter: 'T:(vecN<S>,S);S:(f32,f16)'
    },
    {
        name: 'dot',
        overload: '(e1: vecN<T>,e2: vecN<T>) -> T',
        parameter: 'T:(i32,u32,f32,f16)'
    },
];