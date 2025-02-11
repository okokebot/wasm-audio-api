/* tslint:disable */
/* eslint-disable */
export class WasmAudio {
  free(): void;
  constructor();
  set_frequency(freq: number): void;
  set_volume(volume: number): void;
  /**
   * 指定した音量で開始し、一定時間をかけてゼロに減衰
   */
  set_volume_with_fadeout(volume: number, duration: number): void;
  start(): void;
  stop(): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_wasmaudio_free: (a: number, b: number) => void;
  readonly wasmaudio_new: (a: number) => void;
  readonly wasmaudio_set_frequency: (a: number, b: number) => void;
  readonly wasmaudio_set_volume: (a: number, b: number) => void;
  readonly wasmaudio_set_volume_with_fadeout: (a: number, b: number, c: number) => void;
  readonly wasmaudio_start: (a: number) => void;
  readonly wasmaudio_stop: (a: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
