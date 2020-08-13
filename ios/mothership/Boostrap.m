//
//  Boostrap.m
//  mothership
//
//  Created by dengpengks on 2020/8/12.
//

#import "Boostrap.h"
#import <React/RCTRootView.h>
#import <React/RCTBridge+Private.h>

//#import <UIKit>

@implementation Boostrap

RCT_EXPORT_MODULE(Boostrap)
//RCT_EXPORT_VIEW_PROPERTY(onClick, RCTBubblingEventBlock)
- (UIView *)view
{
  CGFloat screenWidth = [[UIScreen mainScreen] bounds].size.width;
  CGFloat screenHeight = [[UIScreen mainScreen] bounds].size.height;
  
  UIView *view = [[UIView alloc] initWithFrame: CGRectMake(0, 20, [UIScreen mainScreen].bounds.size.width, [[UIScreen mainScreen] bounds].size.height)];
  UILabel *label = [[UILabel alloc] initWithFrame: CGRectMake(0, 0, 200, 100)];
  
  UIButton *button = [UIButton buttonWithType: UIButtonTypeRoundedRect];
  [button setTitle:@"拍照" forState: UIControlStateNormal];
  [button setBackgroundColor: [UIColor blueColor]];
  [button setFrame: CGRectMake((screenWidth - 100) / 2, 60, 100, 20)];
  [view addSubview: button];
  
  [view setBackgroundColor: [UIColor redColor]];
  [label setText: @"testing"];
  [view addSubview: label];
  NSLog(@"view controller is %@", self);
  return view;
}

@end
