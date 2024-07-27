import { guestNavTemplate } from "./guestNavTemplate.js";
import { userNavTemplate } from "./userNavTemplate.js";
import { bus } from '../../constants/busEvents.js'
import { v4 as uuid } from 'uuid';
import styles from './nav.scss';
import { router } from '../../config/routerConfig.js';
import { services } from "../../services/serviceProvider.js";
import { utils } from '../../utils/utilConfig.js';

export default class NavComponent {
  constructor(renderHandler) {
    this.subscriberId = `NavComponent_${uuid()}`;
    this.eventBus = services.eventBus;
    this.renderHandler = renderHandler;
    this.domUtil = utils.domUtil;
    this.router = router;
    this.showView = this._showView.bind(this);
    this.authSubscription = null;
    this.userDataSubscription = null;
  }

  _showView(ctx, next) {
    let toggleNav = this._toggleNav.bind(this);
    // this.authSubscription && this.authSubscription();
    // this.authSubscription = this.eventBus.on(bus.AUTH_STATE_CHANGE, this.subscriberId, (user) => {
    //   this.userDataSubscription && this.userDataSubscription();
    //   if (user) {
    //     this.userDataSubscription = this.eventBus.on(bus.USERDATA, this.subscriberId, () => toggleNav(user, next));
    //   }
    //   toggleNav(user, next)
    // });
    // toggleNav(this.authService.user, next);
    toggleNav(false, next);
  }

  _toggleNav(user, next) {
    let template;
    if (user) {
      template = userNavTemplate();
    } else {
      template = guestNavTemplate();
    }
    this.renderHandler(template);
    next();
  }

  async _logoutHandler() {
    await this.authService.logout();
    this.router.redirect("/");
  }
}
