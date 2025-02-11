# WASM audio API

## Build and use
1. `cargo install wasm-pack`
2. `wasm-pack build --target web`
3. move `pkg/wasm_audio_api.js and pkg/wasm_audio_api_bg.wasm` to `YourWebPJ/public/wasm/`
4. move `pkg/wasm_audio_api.d.ts` to `YourWebPJ/types/` if you need
