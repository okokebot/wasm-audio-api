use wasm_bindgen::prelude::*;
use web_sys::{AudioContext, OscillatorNode, GainNode};

#[wasm_bindgen]
pub struct WasmAudio {
    context: AudioContext,
    oscillator: OscillatorNode,
    gain: GainNode,
}

#[wasm_bindgen]
impl WasmAudio {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Result<WasmAudio, JsValue> {
        let context = AudioContext::new()?;
        let oscillator = context.create_oscillator()?;
        let gain = context.create_gain()?;

        let destination = context.destination();
        oscillator.connect_with_audio_node(&gain)?;
        gain.connect_with_audio_node(&destination)?;

        Ok(WasmAudio {
            context,
            oscillator,
            gain,
        })
    }

    pub fn set_frequency(&self, freq: f32) {
        self.oscillator.frequency().set_value(freq.into());
    }

    pub fn set_volume(&self, volume: f32) {
        self.gain.gain().set_value(volume.into());
    }

    /// 指定した音量で開始し、一定時間をかけてゼロに減衰
    pub fn set_volume_with_fadeout(&self, volume: f32, duration: f32) {
        let gain_param = self.gain.gain();
        let current_time = self.context.current_time();

        gain_param.set_value_at_time(volume.into(), current_time).unwrap();
        gain_param.set_target_at_time(0.0, current_time, duration.into()).unwrap();
    }

    pub fn start(&self) {
        let _ = self.context.resume();
        let _ = self.oscillator.start();
    }

    pub fn stop(&self) {
        let _ = self.context.suspend();
    }
}
