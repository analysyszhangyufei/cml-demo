<cml-buildin-page title="checkbox演示" class=" cml-base cml-page">
  <c-header title="checkbox" class=" cml-view cml-c-header"></c-header>
  <view class="title  cml-base cml-view"><text class=" cml-base cml-text">Checkbox</text></view>
    <view class="box  cml-base cml-view">
      <checkbox checked="{{checkboxValue1}}" disabled="{{false}}" label="Checkbox1" bindchange="_cmlEventProxy" data-eventchange="{{['valueChange1']}}" class=" cml-base cml-checkbox">
      </checkbox>
    </view>
    <view class="title  cml-base cml-view">
      <text class=" cml-base cml-text">value: {{checkboxValue1}}</text>
    </view>
    <view class="box  cml-base cml-view">
      <checkbox checked="{{checkboxValue2}}" label="Checkbox2" position="right" bindchange="_cmlEventProxy" data-eventchange="{{['valueChange2']}}" class=" cml-base cml-checkbox">
      </checkbox>
    </view>
    <view class="title  cml-base cml-view">
      <text class=" cml-base cml-text">value: {{checkboxValue2}}</text>
    </view>
    <view class="box  cml-base cml-view">
      <checkbox checked="{{checkboxValue3}}" label="Checkbox3" position="right" disabled="{{true}}" class=" cml-base cml-checkbox">
      </checkbox>
    </view>
    <view class="title  cml-base cml-view">
      <text class=" cml-base cml-text">value: {{checkboxValue3}}</text>
    </view>
</cml-buildin-page>