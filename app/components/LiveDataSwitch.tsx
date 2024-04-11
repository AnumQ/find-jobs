import { Switch, HelpText } from "@navikt/ds-react";

export function LiveDataSwitch({
  isLiveMode,
  isSwitchLoading,
  onChange,
}: {
  isLiveMode: boolean;
  isSwitchLoading: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <Switch
      checked={isLiveMode}
      loading={isSwitchLoading}
      onChange={(e) => onChange(e.target.checked)}
      data-cy="live-mode-switch"
    >
      Use live data{" "}
    </Switch>
  );
}
export function LiveDataHelpText() {
  return (
    <HelpText title="Use live data">
      When turned on, the page gets real data from the JSearch API. This is
      turned off by default to avoid exceeding the maximum request limit.
    </HelpText>
  );
}
