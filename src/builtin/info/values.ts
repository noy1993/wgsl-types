import { IValue } from "./interfaces";

// https://www.w3.org/TR/WGSL/#builtin-values
// Other Keywords
export const values: IValue[] = [
    { name: 'vertex_index', stage: 'vertex', input: true, type: 'u32' },
    { name: 'instance_index', stage: 'vertex', input: true, type: 'u32' },
    { name: 'position', stage: 'vertex', input: false, type: 'vec4<f32>' },
    { name: 'position', stage: 'fragment', input: true, type: 'vec4<f32>' },
    { name: 'front_facing', stage: 'fragment', input: true, type: 'bool' },
    { name: 'frag_depth', stage: 'fragment', input: false, type: 'f32' },
    { name: 'local_invocation_id', stage: 'compute', input: true, type: 'vec3<u32>' },
    { name: 'local_invocation_index', stage: 'compute', input: true, type: 'u32' },
    { name: 'global_invocation_id', stage: 'compute', input: true, type: 'vec3<u32>' },
    { name: 'workgroup_id', stage: 'compute', input: true, type: 'vec3<u32>' },
    { name: 'num_workgroups', stage: 'compute', input: true, type: 'vec3<u32>' },
    { name: 'sample_index', stage: 'fragment', input: true, type: 'u32' },
    { name: 'sample_mask', stage: 'fragment', input: true, type: 'u32' },
    { name: 'sample_mask', stage: 'fragment', input: false, type: 'u32' },
];