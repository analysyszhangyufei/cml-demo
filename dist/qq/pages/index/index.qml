<cml-buildin-page title="Chameleon" class=" cml-base cml-page">
    <view class="page-home  cml-base cml-view">
      <cml-buildin-scroller height="{{-1}}" class=" cml-base cml-scroller">
        <view class="logo-row  cml-base cml-view">
          <image class="logo-icon  cml-base cml-image" src="{{homeLogo}}"></image>
          <text class="logo-desc  cml-base cml-text">Chameleon</text>
        </view>
        <view class="list  cml-base cml-view">
          <view class="list-cell  cml-base cml-view" qq:for="{{pageList}}" qq:for-item="pageInfo" bindtap="_cmlInline" data-eventtap="{{['onItemSelected',pageInfo.url]}}">
            <view class="content-item row  cml-base cml-view">
              <image class="content-item-left-icon  cml-base cml-image" src="{{pageInfo.icon}}"></image>
              <view class="text-group  cml-base cml-view">
                <text class="text-title  cml-base cml-text">{{pageInfo.title}}</text>
                <text class="text-desc  cml-base cml-text">{{pageInfo.desc}}</text>
              </view>         
              <image class="content-item-right-icon  cml-base cml-image" src="{{arrowRight}}"></image>
            </view>
          </view>    
        </view>
      </cml-buildin-scroller>
    </view>
</cml-buildin-page>