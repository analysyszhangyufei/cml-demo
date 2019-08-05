<view class="tip  cml-base cml-view" qq:if="{{show}}" style="{{tipStyle}}">
  <c-tip-angle direction="{{direction}}" angle-style="{{angleStyle}}" angle-img="{{angleImg}}" class=" cml-view cml-c-tip-angle"></c-tip-angle>
  <view class="tip-wrap  cml-base cml-view">
    <view class="tip-close  cml-base cml-view" bindtap="_cmlEventProxy" data-eventtap="{{['closeTap']}}">
        <image src="{{closeUrl}}" style="width:24rpx;height:24rpx" class=" cml-base cml-image" />
    </view>
    <view class="tip-content  cml-base cml-view">
      <slot class=" cml-base cml-slot"></slot>
    </view>
  </view>
</view>