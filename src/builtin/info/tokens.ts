import { IToken } from "./interfaces";

// https://www.w3.org/TR/WGSL/#context-dependent-name-tokens
export const tokens: IToken[] = [
    { name: 'align', snippet: '($1) $0' },
    { name: 'binding', snippet: '($1) $0' },
    { name: 'builtin', snippet: '(${1|vertex_index,instance_index,position,front_facing,frag_depth,local_invocation_id,local_invocation_index,global_invocation_id,workgroup_id,num_workgroups,sample_index,sample_mask|}) $0' },
    { name: 'compute' },
    { name: 'const' },
    { name: 'fragment' },
    { name: 'group', snippet: '($1) $0' },
    { name: 'id' },
    { name: 'interpolate', snippet: '(${1|perspective,linear,flat|},${2|center,centroid,sample|}) $0' },
    { name: 'invariant' },
    { name: 'location', snippet: '($1) $0' },
    { name: 'size', snippet: '($1) $0' },
    { name: 'vertex' },
    { name: 'workgroup_size' },
];