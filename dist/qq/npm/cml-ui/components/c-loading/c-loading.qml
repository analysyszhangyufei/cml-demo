<view class="{{containerClassName}}  cml-base cml-view" style="{{containerStyle}}">
  <view class="{{targetClassName}}  cml-base cml-view  _cml_ref_lmc_" id="mask">
    <slot class=" cml-base cml-slot" />
  </view>
  <view class="{{boxClassName}}  cml-base cml-view" style="{{loadingWrapStyle}}" qq:if="{{!!loading}}">
    <view class="{{targetMaskClassName}}  cml-base cml-view" style="{{rectStyle}}"></view>
    <view class="{{loadingWrapClassName}}  cml-base cml-view" style="{{rectStyle}}">
      <view class="{{loadingClassName}}  cml-base cml-view" style="{{loadingStyle}}">
        <image src="{{icon}}" class="{{loadImgClassName}}  cml-base cml-image  _cml_ref_lmc_" id="loading" />
        <text qq:if="{{!!tip}}" class="{{loadTextClassName}}  cml-base cml-text">{{tip}}</text>
      </view>
    </view>
  </view>
</view>