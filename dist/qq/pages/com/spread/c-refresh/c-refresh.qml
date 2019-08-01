<cml-buildin-page title="refresh演示" class=" cml-base cml-page">
  <c-header title="refresh" class=" cml-view cml-c-header"></c-header>
  <view class="container  cml-base cml-view">
    <cml-buildin-scroller scroll-direction="{{scrollDirection}}" bottom-offset="{{bottomOffset}}" bindscrolltobottom="_cmlEventProxy" data-eventscrolltobottom="{{['onBottom']}}" bindcustomscroll="_cmlEventProxy" data-eventcustomscroll="{{['onScroll']}}" height="{{-1}}" class=" cml-base cml-scroller">   
      <c-refresh display="{{ topRefreshing }}" bindrefresh="_cmlEventProxy" data-eventrefresh="{{['onrefreshUp']}}" class=" cml-view cml-c-refresh">
      </c-refresh>
      <view class=" cml-base cml-view">
        <view class="cell  cml-base cml-view" qq:for="{{panels}}" qq:for-index="i" qq:for-item="item" bindtap="_cmlEventProxy" data-eventtap="{{['change']}}" data-idx="{{i}}">
            <view class="panel  cml-base cml-view" style="{{item.computedStyle}}">
                <text class="text  cml-base cml-text">{{item.label}}</text>
            </view>
        </view>
      </view>
      <view class="no-more-text  cml-base cml-view" qq:if="{{ page >= sumPage }}"><text class=" cml-base cml-text">没有更多了...</text></view>
      <c-refresh qq:else display="{{ bottomRefreshing }}" direction="bottom" custom-ui="{{ true }}" bindrefresh="_cmlEventProxy" data-eventrefresh="{{['onrefreshDown']}}" class=" cml-view cml-c-refresh">
        <view class="loading-text  cml-base cml-view" style="{{loadingTextStyle}}"><text class=" cml-base cml-text">上拉刷新...</text></view>
      </c-refresh>
    </cml-buildin-scroller>
  </view>
</cml-buildin-page>