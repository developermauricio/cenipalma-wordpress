<?php
// If this file is called directly, abort.
if(!defined('ABSPATH')) {
	exit;
}
?>
<div id="ipanorama-modal-{{modalData.id}}" class="ipanorama-modal" tabindex="-1">
	<div class="ipanorama-modal-dialog">
		<div class="ipanorama-modal-header">
			<div class="ipanorama-modal-close" al-on.click="modalData.deferred.resolve('close');">&times;</div>
			<div class="ipanorama-modal-title"><i class="xfa fa-info-circle"></i><?php esc_html_e('Edit the marker view', IPANORAMA_PLUGIN_NAME); ?></div>
			<div class="ipanorama-modal-placeholder">
				<div class="ipanorama-control">
					<div class="ipanorama-marker-canvas-wrap">
						<div class="ipanorama-marker-canvas">
							<div class="ipanorama-marker-wrap">
								<div class="ipanorama-marker"
									 al-style.width="modalData.appData.fn.getMarkerStyle(modalData.appData, modalData.marker, 'width')"
									 al-style.height="modalData.appData.fn.getMarkerStyle(modalData.appData, modalData.marker, 'height')"
									 al-init="modalData.fn.initMarker(modalData, $element)"
								>
									<div class="ipanorama-marker-lbl"
										 al-style.color="modalData.appData.fn.getIconStyle(modalData.appData, modalData.marker.view.icon, 'color')"
										 al-style.font-size="modalData.appData.fn.getIconStyle(modalData.appData, modalData.marker.view.icon, 'font-size')"
									>
										<div class="ipanorama-marker-ico" al-if="modalData.marker.view.icon.name"><i class="xfa {{modalData.marker.view.icon.name}}"></i></div>
										<div class="ipanorama-marker-txt" al-if="modalData.marker.view.icon.text">{{modalData.marker.view.icon.text}}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="ipanorama-modal-data">
			<div class="ipanorama-control">
				<div class="ipanorama-input-group ipanorama-long">
					<div class="ipanorama-input-group-cell ipanorama-rgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('Sets a marker width (auto or px)', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('Width', IPANORAMA_PLUGIN_NAME); ?> {{modalData.marker.view.autoWidth ? '[auto]' : '[px]'}}</div>
						<div class="ipanorama-input-group ipanorama-long">
							<div class="ipanorama-input-group-cell ipanorama-pinch">
								<div class="ipanorama-btn ipanorama-default ipanorama-no-br" al-on.click="modalData.marker.view.autoWidth = !modalData.marker.view.autoWidth;" title="<?php _e('Enable/disable custom width in px', IPANORAMA_PLUGIN_NAME); ?>"><span><i class="xfa" al-attr.class.fa-check="!modalData.marker.view.autoWidth"></i></span></div>
							</div>
							<div class="ipanorama-input-group-cell">
								<input class="ipanorama-number ipanorama-long ipanorama-no-blr ipanorama-can-lock" al-integer="modalData.marker.view.width" al-attr.readonly="modalData.marker.view.autoWidth">
							</div>
						</div>
					</div>
					<div class="ipanorama-input-group-cell ipanorama-lgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('Sets a marker height (auto or px)', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('Height', IPANORAMA_PLUGIN_NAME); ?> {{modalData.marker.view.autoHeight ? '[auto]' : '[px]'}}</div>
						<div class="ipanorama-input-group ipanorama-long">
							<div class="ipanorama-input-group-cell ipanorama-pinch">
								<div class="ipanorama-btn ipanorama-default ipanorama-no-br" al-on.click="modalData.marker.view.autoHeight = !modalData.marker.view.autoHeight;" title="<?php _e('Enable/disable custom height in px', IPANORAMA_PLUGIN_NAME); ?>"><span><i class="xfa" al-attr.class.fa-check="!modalData.marker.view.autoHeight"></i></span></div>
							</div>
							<div class="ipanorama-input-group-cell">
								<input class="ipanorama-number ipanorama-long ipanorama-no-blr ipanorama-can-lock" al-integer="modalData.marker.view.height" al-attr.readonly="modalData.marker.view.autoHeight">
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="ipanorama-control">
				<div class="ipanorama-input-group ipanorama-long">
					<div class="ipanorama-input-group-cell ipanorama-rgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('Sets a marker icon', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('Icon name', IPANORAMA_PLUGIN_NAME); ?></div>
						<div class="ipanorama-input-group ipanorama-long">
							<div class="ipanorama-input-group-cell">
								<input class="ipanorama-text ipanorama-long ipanorama-no-brr" type="text" al-text="modalData.marker.view.icon.name" placeholder="<?php esc_html_e('Select an icon', IPANORAMA_PLUGIN_NAME); ?>">
							</div>
							<div class="ipanorama-input-group-cell ipanorama-pinch">
								<div class="ipanorama-btn ipanorama-default ipanorama-no-bl" al-on.click="modalData.appData.fn.selectIcon(modalData.appData, modalData.rootScope, modalData.marker.view.icon)"><span><i class="xfa fa-folder"></i></span></div>
							</div>
						</div>
					</div>
					<div class="ipanorama-input-group-cell ipanorama-lgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('Sets an icon text', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('Icon text', IPANORAMA_PLUGIN_NAME); ?></div>
						<input class="ipanorama-text ipanorama-long" type="text" al-text="modalData.marker.view.icon.text">
					</div>
				</div>
			</div>
			
			<div class="ipanorama-control">
				<div class="ipanorama-input-group ipanorama-long">
					<div class="ipanorama-input-group-cell ipanorama-rgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('Sets an icon color', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('Icon color', IPANORAMA_PLUGIN_NAME); ?></div>
						<div class="ipanorama-color ipanorama-long" al-color="modalData.marker.view.icon.color"></div>
					</div>
					<div class="ipanorama-input-group-cell ipanorama-lgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('Sets an icon size', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('Icon size', IPANORAMA_PLUGIN_NAME); ?></div>
						<div class="ipanorama-unit ipanorama-long" al-unit="modalData.marker.view.icon.size"></div>
					</div>
				</div>
			</div>
			
			<div class="ipanorama-control">
				<div class="ipanorama-helper" title="<?php esc_html_e('Sets an icon margin', IPANORAMA_PLUGIN_NAME); ?>"></div>
				<div class="ipanorama-label"><?php esc_html_e('Icon margin', IPANORAMA_PLUGIN_NAME); ?></div>
				<div class="ipanorama-unit ipanorama-long" al-unit="modalData.marker.view.icon.margin.all"></div>
			</div>
			
			<div class="ipanorama-control">
				<div class="ipanorama-input-group ipanorama-long">
					<div class="ipanorama-input-group-cell ipanorama-rgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('Sets a top icon margin', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('top', IPANORAMA_PLUGIN_NAME); ?></div>
						<div class="ipanorama-unit ipanorama-long" al-unit="modalData.marker.view.icon.margin.top"></div>
					</div>
					<div class="ipanorama-input-group-cell ipanorama-lgap ipanorama-rgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('Sets a right icon margin', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('right', IPANORAMA_PLUGIN_NAME); ?></div>
						<div class="ipanorama-unit ipanorama-long" al-unit="modalData.marker.view.icon.margin.right"></div>
					</div>
					<div class="ipanorama-input-group-cell ipanorama-lgap ipanorama-rgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('Sets a bottom icon margin', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('bottom', IPANORAMA_PLUGIN_NAME); ?></div>
						<div class="ipanorama-unit ipanorama-long" al-unit="modalData.marker.view.icon.margin.bottom"></div>
					</div>
					<div class="ipanorama-input-group-cell ipanorama-lgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('Sets a left icon margin', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('left', IPANORAMA_PLUGIN_NAME); ?></div>
						<div class="ipanorama-unit ipanorama-long" al-unit="modalData.marker.view.icon.margin.left"></div>
					</div>
				</div>
			</div>
			
			<div class="ipanorama-control">
				<div class="ipanorama-helper" title="<?php esc_html_e('Sets a background image (jpeg or png format)', IPANORAMA_PLUGIN_NAME); ?>"></div>
				<div class="ipanorama-label"><?php esc_html_e('Background image', IPANORAMA_PLUGIN_NAME); ?></div>
				<div class="ipanorama-input-group ipanorama-long">
					<div class="ipanorama-input-group-cell">
						<input class="ipanorama-text ipanorama-long ipanorama-no-brr" type="text" al-text="modalData.marker.view.background.image.url" placeholder="<?php esc_html_e('Select an image', IPANORAMA_PLUGIN_NAME); ?>">
					</div>
					<div class="ipanorama-input-group-cell ipanorama-pinch">
						<div class="ipanorama-btn ipanorama-default ipanorama-no-bl" al-on.click="modalData.appData.fn.selectImage(modalData.appData, modalData.rootScope, modalData.marker.view.background.image)"><span><i class="xfa fa-folder"></i></span></div>
					</div>
				</div>
			</div>
			
			<div class="ipanorama-control">
				<div class="ipanorama-input-group ipanorama-long">
					<div class="ipanorama-input-group-cell ipanorama-rgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('Sets a background color', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('Background color', IPANORAMA_PLUGIN_NAME); ?></div>
						<div class="ipanorama-color ipanorama-long" al-color="modalData.marker.view.background.color"></div>
					</div>
					<div class="ipanorama-input-group-cell ipanorama-lgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('How a background image will be repeated', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('Background repeat', IPANORAMA_PLUGIN_NAME); ?></div>
						<div class="ipanorama-select ipanorama-long" al-backgroundrepeat="modalData.marker.view.background.repeat"></div>
					</div>
				</div>
			</div>
			
			<div class="ipanorama-control">
				<div class="ipanorama-input-group ipanorama-long">
					<div class="ipanorama-input-group-cell ipanorama-rgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('Specifies a size of the background image', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('Background size', IPANORAMA_PLUGIN_NAME); ?></div>
						<div class="ipanorama-select ipanorama-long" al-backgroundsize="modalData.marker.view.background.size"></div>
					</div>
					<div class="ipanorama-input-group-cell ipanorama-lgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('Sets a starting position of the background image', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('Background position', IPANORAMA_PLUGIN_NAME); ?></div>
						<input class="ipanorama-text ipanorama-long" type="text" al-text="modalData.marker.view.background.position" placeholder="<?php esc_html_e('Example: 50% 50%', IPANORAMA_PLUGIN_NAME); ?>">
					</div>
				</div>
			</div>
			
			<!-- border begin -->
			<div class="ipanorama-control">
				<div class="ipanorama-border-tabs">
					<div class="ipanorama-tab-all" al-attr.class.ipanorama-active="modalData.appData.ui.borderTabs.all" al-on.click="modalData.appData.fn.onBorderTab(modalData.appData,'all')" al-attr.class.ipanorama-enable="modalData.marker.view.border.all.active"><?php esc_html_e('All', IPANORAMA_PLUGIN_NAME); ?></div>
					<div class="ipanorama-tab-top" al-attr.class.ipanorama-active="modalData.appData.ui.borderTabs.top" al-on.click="modalData.appData.fn.onBorderTab(modalData.appData,'top')" al-attr.class.ipanorama-enable="modalData.marker.view.border.top.active"><?php esc_html_e('Top', IPANORAMA_PLUGIN_NAME); ?></div>
					<div class="ipanorama-tab-right" al-attr.class.ipanorama-active="modalData.appData.ui.borderTabs.right" al-on.click="modalData.appData.fn.onBorderTab(modalData.appData,'right')" al-attr.class.ipanorama-enable="modalData.marker.view.border.right.active"><?php esc_html_e('Right', IPANORAMA_PLUGIN_NAME); ?></div>
					<div class="ipanorama-tab-bottom" al-attr.class.ipanorama-active="modalData.appData.ui.borderTabs.bottom" al-on.click="modalData.appData.fn.onBorderTab(modalData.appData,'bottom')" al-attr.class.ipanorama-enable="modalData.marker.view.border.bottom.active"><?php esc_html_e('Bottom', IPANORAMA_PLUGIN_NAME); ?></div>
					<div class="ipanorama-tab-left" al-attr.class.ipanorama-active="modalData.appData.ui.borderTabs.left" al-on.click="modalData.appData.fn.onBorderTab(modalData.appData,'left')" al-attr.class.ipanorama-enable="modalData.marker.view.border.left.active"><?php esc_html_e('Left', IPANORAMA_PLUGIN_NAME); ?></div>
				</div>
			</div>
			
			<!-- border all -->
			<div class="ipanorama-control" al-if="modalData.appData.ui.borderTabs.all">
				<div class="ipanorama-input-group ipanorama-long">
					<div class="ipanorama-input-group-cell ipanorama-pinch">
						<div al-checkbox="modalData.marker.view.border.all.active"></div>
					</div>
					<div class="ipanorama-input-group-cell">
						<?php esc_html_e('Enable border', IPANORAMA_PLUGIN_NAME); ?>
					</div>
				</div>
				<div class="ipanorama-input-group ipanorama-long">
					<div class="ipanorama-input-group-cell ipanorama-rgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('Sets a border color', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('Border color', IPANORAMA_PLUGIN_NAME); ?></div>
						<div class="ipanorama-color ipanorama-long" al-color="modalData.marker.view.border.all.color"></div>
					</div>
					<div class="ipanorama-input-group-cell ipanorama-lgap ipanorama-rgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('Sets a border style', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('Border style', IPANORAMA_PLUGIN_NAME); ?></div>
						<div class="ipanorama-select ipanorama-long" al-borderstyle="modalData.marker.view.border.all.style"></div>
					</div>
					<div class="ipanorama-input-group-cell ipanorama-lgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('Sets a border width', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('Border width', IPANORAMA_PLUGIN_NAME); ?></div>
						<div class="ipanorama-unit ipanorama-long" al-unit="modalData.marker.view.border.all.width"></div>
					</div>
				</div>
			</div>
			
			<!-- border top -->
			<div class="ipanorama-control" al-if="modalData.appData.ui.borderTabs.top">
				<div class="ipanorama-input-group ipanorama-long">
					<div class="ipanorama-input-group-cell ipanorama-pinch">
						<div al-checkbox="modalData.marker.view.border.top.active"></div>
					</div>
					<div class="ipanorama-input-group-cell">
						<?php esc_html_e('Enable top border', IPANORAMA_PLUGIN_NAME); ?>
					</div>
				</div>
				<div class="ipanorama-input-group ipanorama-long">
					<div class="ipanorama-input-group-cell ipanorama-rgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('Sets a border color', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('Border color', IPANORAMA_PLUGIN_NAME); ?></div>
						<div class="ipanorama-color ipanorama-long" al-color="modalData.marker.view.border.top.color"></div>
					</div>
					<div class="ipanorama-input-group-cell ipanorama-lgap ipanorama-rgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('Sets a border style', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('Border style', IPANORAMA_PLUGIN_NAME); ?></div>
						<div class="ipanorama-select ipanorama-long" al-borderstyle="modalData.marker.view.border.top.style"></div>
					</div>
					<div class="ipanorama-input-group-cell ipanorama-lgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('Sets a border width', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('Border width', IPANORAMA_PLUGIN_NAME); ?></div>
						<div class="ipanorama-unit ipanorama-long" al-unit="modalData.marker.view.border.top.width"></div>
					</div>
				</div>
			</div>
			
			<!-- border right -->
			<div class="ipanorama-control" al-if="modalData.appData.ui.borderTabs.right">
				<div class="ipanorama-input-group ipanorama-long">
					<div class="ipanorama-input-group-cell ipanorama-pinch">
						<div al-checkbox="modalData.marker.view.border.right.active"></div>
					</div>
					<div class="ipanorama-input-group-cell">
						<?php esc_html_e('Enable right border', IPANORAMA_PLUGIN_NAME); ?>
					</div>
				</div>
				<div class="ipanorama-input-group ipanorama-long">
					<div class="ipanorama-input-group-cell ipanorama-rgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('Sets a border color', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('Border color', IPANORAMA_PLUGIN_NAME); ?></div>
						<div class="ipanorama-color ipanorama-long" al-color="modalData.marker.view.border.right.color"></div>
					</div>
					<div class="ipanorama-input-group-cell ipanorama-lgap ipanorama-rgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('Sets a border style', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('Border style', IPANORAMA_PLUGIN_NAME); ?></div>
						<div class="ipanorama-select ipanorama-long" al-borderstyle="modalData.marker.view.border.right.style"></div>
					</div>
					<div class="ipanorama-input-group-cell ipanorama-lgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('Sets a border width', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('Border width', IPANORAMA_PLUGIN_NAME); ?></div>
						<div class="ipanorama-unit ipanorama-long" al-unit="modalData.marker.view.border.right.width"></div>
					</div>
				</div>
			</div>
			
			<!-- border bottom -->
			<div class="ipanorama-control" al-if="modalData.appData.ui.borderTabs.bottom">
				<div class="ipanorama-input-group ipanorama-long">
					<div class="ipanorama-input-group-cell ipanorama-pinch">
						<div al-checkbox="modalData.marker.view.border.bottom.active"></div>
					</div>
					<div class="ipanorama-input-group-cell">
						<?php esc_html_e('Enable bottom border', IPANORAMA_PLUGIN_NAME); ?>
					</div>
				</div>
				<div class="ipanorama-input-group ipanorama-long">
					<div class="ipanorama-input-group-cell ipanorama-rgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('Sets a border color', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('Border color', IPANORAMA_PLUGIN_NAME); ?></div>
						<div class="ipanorama-color ipanorama-long" al-color="modalData.marker.view.border.bottom.color"></div>
					</div>
					<div class="ipanorama-input-group-cell ipanorama-lgap ipanorama-rgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('Sets a border style', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('Border style', IPANORAMA_PLUGIN_NAME); ?></div>
						<div class="ipanorama-select ipanorama-long" al-borderstyle="modalData.marker.view.border.bottom.style"></div>
					</div>
					<div class="ipanorama-input-group-cell ipanorama-lgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('Sets a border width', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('Border width', IPANORAMA_PLUGIN_NAME); ?></div>
						<div class="ipanorama-unit ipanorama-long" al-unit="modalData.marker.view.border.bottom.width"></div>
					</div>
				</div>
			</div>
			
			<!-- border left -->
			<div class="ipanorama-control" al-if="modalData.appData.ui.borderTabs.left">
				<div class="ipanorama-input-group ipanorama-long">
					<div class="ipanorama-input-group-cell ipanorama-pinch">
						<div al-checkbox="modalData.marker.view.border.left.active"></div>
					</div>
					<div class="ipanorama-input-group-cell">
						<?php esc_html_e('Enable left border', IPANORAMA_PLUGIN_NAME); ?>
					</div>
				</div>
				<div class="ipanorama-input-group ipanorama-long">
					<div class="ipanorama-input-group-cell ipanorama-rgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('Sets a border color', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('Border color', IPANORAMA_PLUGIN_NAME); ?></div>
						<div class="ipanorama-color ipanorama-long" al-color="modalData.marker.view.border.left.color"></div>
					</div>
					<div class="ipanorama-input-group-cell ipanorama-lgap ipanorama-rgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('Sets a border style', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('Border style', IPANORAMA_PLUGIN_NAME); ?></div>
						<div class="ipanorama-select ipanorama-long" al-borderstyle="modalData.marker.view.border.left.style"></div>
					</div>
					<div class="ipanorama-input-group-cell ipanorama-lgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('Sets a border width', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('Border width', IPANORAMA_PLUGIN_NAME); ?></div>
						<div class="ipanorama-unit ipanorama-long" al-unit="modalData.marker.view.border.left.width"></div>
					</div>
				</div>
			</div>
			
			<div class="ipanorama-control">
				<div class="ipanorama-helper" title="<?php esc_html_e('Sets a border radius', IPANORAMA_PLUGIN_NAME); ?>"></div>
				<div class="ipanorama-label"><?php esc_html_e('Border radius', IPANORAMA_PLUGIN_NAME); ?></div>
				<div class="ipanorama-unit ipanorama-long" al-unit="modalData.marker.view.border.radius.all"></div>
			</div>
			
			<div class="ipanorama-control">
				<div class="ipanorama-input-group ipanorama-long">
					<div class="ipanorama-input-group-cell ipanorama-rgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('Sets a border top-left radius', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('top-left', IPANORAMA_PLUGIN_NAME); ?></div>
						<div class="ipanorama-unit ipanorama-long" al-unit="modalData.marker.view.border.radius.topLeft"></div>
					</div>
					<div class="ipanorama-input-group-cell ipanorama-lgap ipanorama-rgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('Sets a border top-right radius', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('top-right', IPANORAMA_PLUGIN_NAME); ?></div>
						<div class="ipanorama-unit ipanorama-long" al-unit="modalData.marker.view.border.radius.topRight"></div>
					</div>
					<div class="ipanorama-input-group-cell ipanorama-lgap ipanorama-rgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('Sets a border bottom-right radius', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('bottom-right', IPANORAMA_PLUGIN_NAME); ?></div>
						<div class="ipanorama-unit ipanorama-long" al-unit="modalData.marker.view.border.radius.bottomRight"></div>
						
					</div>
					<div class="ipanorama-input-group-cell ipanorama-lgap">
						<div class="ipanorama-helper" title="<?php esc_html_e('Sets a border bottom-left radius', IPANORAMA_PLUGIN_NAME); ?>"></div>
						<div class="ipanorama-label"><?php esc_html_e('bottom-left', IPANORAMA_PLUGIN_NAME); ?></div>
						<div class="ipanorama-unit ipanorama-long" al-unit="modalData.marker.view.border.radius.bottomLeft"></div>
					</div>
				</div>
			</div>
			<!-- border end -->
		</div>
		<div class="ipanorama-modal-footer">
			<div class="ipanorama-modal-btn ipanorama-modal-btn-close" al-on.click="modalData.deferred.resolve('close');"><?php esc_html_e('Close', IPANORAMA_PLUGIN_NAME); ?></div>
			<div class="ipanorama-modal-btn ipanorama-modal-btn-create" al-on.click="modalData.deferred.resolve(true);"><?php esc_html_e('Save', IPANORAMA_PLUGIN_NAME); ?></div>
		</div>
	</div>
</div>