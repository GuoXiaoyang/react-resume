import React, { Component } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import resume_en_US from '../template/resume.en_US';
import resume_zh_CN from '../template/resume.zh_CN';
import ui_en_US from '../template/ui.en_US';
import ui_zh_CN from '../template/ui.zh_CN';
import Home from './Home';
import flattenMessages from '../utils/flattenMessages';

import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';

addLocaleData([...en, ...zh]);
console.log(flattenMessages(ui_en_US));

const SUPPORT_LOCALES = [
  {
    name: "English",
    value: "en-US",
  },
  {
    name: "简体中文",
    value: "zh-CN",
  }
];

class App extends Component {
  state = { lang:'en', messages: ui_en_US, resume: resume_en_US };
  constructor(props) {
    super(props);
    this.onSelectLocale = this.onSelectLocale.bind(this);
  }
  renderLocaleSelector() {
    return (
      <select onChange={this.onSelectLocale} defaultValue="" className="locale-selector">
        <option value="" disabled>Change Language</option>
        {SUPPORT_LOCALES.map(locale => (
          <option key={locale.value} value={locale.value}>{locale.name}</option>
        ))}
      </select>
    
    );
  }
  onSelectLocale(e) {
    let lang = e.target.value;
    if(lang==='zh-CN') {
      this.setState({
        lang: lang.slice(0,2), 
        messages: ui_zh_CN, 
        resume: resume_zh_CN
      });
    } else {
      this.setState({
        lang: lang.slice(0,2), 
        messages: ui_en_US, 
        resume: resume_en_US
      });
    }
    // window.location.search = `?lang=${lang}`;
  }
  render() {
    const { lang, messages, resume } = this.state;
    const flattenedMessages = flattenMessages(messages);
    return (
      <div className="App">
        <IntlProvider locale={lang} messages={flattenedMessages}>
          <Home resume={resume} navigation={messages.navigation}/>
        </IntlProvider>
        {this.renderLocaleSelector()}
      </div>
    );
  }
}

export default App;
