#!/usr/bin/env ts-node

import {
  test,
}             from 'tstest'

import {
  wechatyType,
}                               from '../src/'

test('integration testing', async (t) => {
  t.ok(wechatyType, 'should tbw')
})
