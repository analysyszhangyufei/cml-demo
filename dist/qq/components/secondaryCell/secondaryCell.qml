<view class="secondary-cell  cml-base cml-view">
  <text class="cell-title  cml-base cml-text">{{title}}</text>
  <view class="cell-divider  cml-base cml-view"></view>
  <view class="btn-group  cml-base cml-view" qq:for="{{list}}" qq:for-item="cellInfo">
    <text class="btn-tip  cml-base cml-text">{{cellInfo.title}}</text>
    <cml-buildin-button class="action-btn  cml-base cml-button" size="none" type="blue" text="{{cellInfo.btnText}}" btn-style="height:100cpx;width:658cpx;margin: 24cpx 0 30cpx;" data-index="{{index}}" bindonclick="_cmlInline" data-eventonclick="{{['onBtnClick',index]}}"></cml-buildin-button>
  </view>
</view>