import { StarsBackground } from "@/components/animate-ui/backgrounds/stars";
import {
  InputButton,
  InputButtonAction,
  InputButtonProvider,
  InputButtonSubmit,
  InputButtonInput,
} from "@/components/animate-ui/buttons/input";

export default function Page() {
  return (
    <StarsBackground className="absolute inset-0 flex items-center justify-center">
      <InputButtonProvider>
        <InputButton className="w-2xs">
          <InputButtonAction>和陈晓森聊一聊</InputButtonAction>
          <InputButtonSubmit>Sent</InputButtonSubmit>
        </InputButton>
        <InputButtonInput placeholder="聊点什么..." />
      </InputButtonProvider>
    </StarsBackground>
  );
}
