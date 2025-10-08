import { describe, expect, it } from "vitest";
import { type Recipe, MilkAmount, Flavor, Fruit } from "$lib/ingredients";
import { toITerm } from "./iterm";

describe("ITerm export", () => {
  // FIXME: floating point rounding issues below. find a better way to test this.
  it.todo("exports the right format", () => {
    const recipe: Recipe = {
      milkAmount: MilkAmount.None,
      flavor: Flavor.Classic,
      artificialColors: 8,
      sugar: 8,
      fruit: Fruit.Elderberry,
      sogginess: 7,
    };

    const config = toITerm(recipe);

    // prettier-ignore
    const expected = `<!--
Save the configuration below to a file called root-loops.itermcolors.
Open iTerm2's Settings > Profiles > Color tab and import the file into iTerm2.
-->

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Ansi 0 Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.28623376036104237</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.11630965210831629</real>
    <key>Red Component</key>
    <real>0.07767369000707419</real>
  </dict>

  <key>Ansi 1 Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.5770019809131376</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.5387780741916999</real>
    <key>Red Component</key>
    <real>0.9626891834493657</real>
  </dict>

  <key>Ansi 10 Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.3788492870966785</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.8640905471185046</real>
    <key>Red Component</key>
    <real>0.5654322419640978</real>
  </dict>

  <key>Ansi 11 Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.3831406435730512</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.7212521790275102</real>
    <key>Red Component</key>
    <real>0.9520338449780149</real>
  </dict>

  <key>Ansi 12 Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.9742366396185266</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.7803614406191386</real>
    <key>Red Component</key>
    <real>0.6300733320441964</real>
  </dict>

  <key>Ansi 13 Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.9550405816231001</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.6869381535598401</real>
    <key>Red Component</key>
    <real>0.8709925917019175</real>
  </dict>

  <key>Ansi 14 Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.8613665139730446</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.8618616729201256</real>
    <key>Red Component</key>
    <real>0.31026270764390584</real>
  </dict>

  <key>Ansi 15 Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.9884971751454633</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.9434707489654212</real>
    <key>Red Component</key>
    <real>0.9271221182405632</real>
  </dict>

  <key>Ansi 2 Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.3235642513391246</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.7700098712268946</real>
    <key>Red Component</key>
    <real>0.496467904062948</real>
  </dict>

  <key>Ansi 3 Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.24491984962449298</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.6299073703878277</real>
    <key>Red Component</key>
    <real>0.8748429618112559</real>
  </dict>

  <key>Ansi 4 Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.9590837930101589</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.6943959840752121</real>
    <key>Red Component</key>
    <real>0.48729504778723526</real>
  </dict>

  <key>Ansi 5 Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.9355531281124715</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.5614650024070034</real>
    <key>Red Component</key>
    <real>0.8212310962395277</real>
  </dict>

  <key>Ansi 6 Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.769371115900704</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.7694452344678995</real>
    <key>Red Component</key>
    <real>0.2392402589841146</real>
  </dict>

  <key>Ansi 7 Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.9404511900583498</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.7173440498259581</real>
    <key>Red Component</key>
    <real>0.6423075221496393</real>
  </dict>

  <key>Ansi 8 Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.6109182891275445</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.286520814284273</real>
    <key>Red Component</key>
    <real>0.21059068043892265</real>
  </dict>

  <key>Ansi 9 Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.6939682462309612</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.6744435450253575</real>
    <key>Red Component</key>
    <real>0.9770588334070177</real>
  </dict>

  <key>Background Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.1028840922262528</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.02578957895514688</real>
    <key>Red Component</key>
    <real>0.01395511919112051</real>
  </dict>

  <key>Badge Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>0.5</real>
    <key>Blue Component</key>
    <real>0.5770019809131376</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.5387780741916999</real>
    <key>Red Component</key>
    <real>0.9626891834493657</real>
  </dict>

  <key>Bold Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.9884971751454633</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.9434707489654212</real>
    <key>Red Component</key>
    <real>0.9271221182405632</real>
  </dict>

  <key>Cursor Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.9404511900583498</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.7173440498259581</real>
    <key>Red Component</key>
    <real>0.6423075221496392</real>
  </dict>

  <key>Cursor Guide Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>0.5</real>
    <key>Blue Component</key>
    <real>0.8613665139730446</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.8618616729201256</real>
    <key>Red Component</key>
    <real>0.31026270764390584</real>
  </dict>

  <key>Cursor Text Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.1028840922262528</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.02578957895514688</real>
    <key>Red Component</key>
    <real>0.01395511919112051</real>
  </dict>

  <key>Foreground Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.9770579279701356</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.8870377794680399</real>
    <key>Red Component</key>
    <real>0.8547547839586531</real>
  </dict>

  <key>Match Background Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.28623376036104237</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.11630965210831629</real>
    <key>Red Component</key>
    <real>0.07767369000707419</real>
  </dict>

  <key>Selected Text Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.9404511900583498</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.7173440498259581</real>
    <key>Red Component</key>
    <real>0.6423075221496392</real>
  </dict>

  <key>Selection Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.6109182891275445</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.286520814284273</real>
    <key>Red Component</key>
    <real>0.21059068043892265</real>
  </dict>

  <key>Tab Color</key>
  <dict>
    <key>Alpha Component</key>
    <real>1</real>
    <key>Blue Component</key>
    <real>0.1028840922262528</real>
    <key>Color Space</key>
    <string>P3</string>
    <key>Green Component</key>
    <real>0.02578957895514688</real>
    <key>Red Component</key>
    <real>0.01395511919112051</real>
  </dict>

</dict>
</plist>`;

    expect(config).toBe(expected);
  });
});
